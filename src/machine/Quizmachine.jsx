import { createMachine, assign } from 'xstate';
import { questions } from '../data/questions';

const quizMachine = createMachine({
  id: 'quiz',
  initial: 'idle',
  context: {
    questions:questions ,
    currentQuestionIndex: 0,
    score: 0,
    chatLog: [], // Initialize chatLog as an empty array,
    part : 1,
  },
  states: {
    idle: {
      on: {
        START: {
          target: 'questioning',
          actions: assign({
            chatLog: ({context}) => [
              ...context.chatLog,
              { type: 'bot', text: 'Welcome to the Quiz! Click an option to start.' }
            ]
          })
        }
      }
    },
    questioning: {
      on: {


        TESTANSWER : [
          {
            target : 'correct',
            actions : assign({
              chatLog : ({context,event})=>{
                return [
                  ...context.chatLog,
                  {
                    type: 'user',
                    text: context.questions[
                      context.currentQuestionIndex
                    ].options.find((opt) => opt.id === event.id).text,
                  },
                  { type: 'bot', text: 'Correct!' }
                ]
              }
            })
          },{
            target : 'incorrect',
            actions : assign({
              chatLog: ({context,event}) => [
                ...context.chatLog,
                {
                  type: 'user',
                  text: context.questions[
                    context.currentQuestionIndex
                  ].options.find((opt) => opt.id === event.id).text,
                },
                { type: 'bot', text: 'Incorrect!' }
              ]
            })
          }
        ],
        ANSWER: [
          {
            target: 'correct',
            guard: 'isCorrect',
            
            actions: assign({
              chatLog: ({context,event}) => {
                return [
                  ...context.chatLog,
                  {
                    type: 'user',
                    text: context.questions[
                      context.currentQuestionIndex
                    ].options.find((opt) => opt.id === event.id).text,
                  },
                  { type: 'bot', text: context.questions[context.currentQuestionIndex].options.find((opt)=>opt.id===event.id).text }
                ];
              }
            })
          },
          {
            target: 'incorrect',
            actions: assign({
              chatLog: ({context,event}) => [
                ...context.chatLog,
                {
                  type: 'user',
                  text: context.questions[
                    context.currentQuestionIndex
                  ].options.find((opt) => opt.id === event.id).text,
                },
                { type: 'bot', text: context.questions[context.currentQuestionIndex].options.find((opt)=>opt.id===event.id).text }
              ]
            })
          },
          {
            target : "NEXT",
          }
        ]
      }
    },
    correct: {
      entry: assign({
        score: ({context}) => context.score + 1,
        currentQuestionIndex: ({context}) => context.currentQuestionIndex + 1
      }),
      always: 'feedback'
    },
    incorrect: {
      entry: assign({
        currentQuestionIndex: ({context}) => context.currentQuestionIndex + 1
      }),
      always: 'feedback'
    },
    NEXT : {
      entry : assign({
        currentQuestionIndex : ({context})=> context.currentQuestionIndex + 1
      }),
    },
    feedback: {
      always: [
        { target: 'complete', guard: ({context}) => context.currentQuestionIndex >= context.questions.length },
        {target : 'NextPart', guard: ({context}) => context.questions[context.part].length >= context.currentQuestionIndex - 1},
        { target: 'questioning', actions: assign({
          chatLog: ({context}) =>{
            return  [
                  ...context.chatLog,
                  { type: 'bot', text : context.questions[context.currentQuestionIndex-1].feedBack }
                ]
            } 
        })}
      ]
    },
    NextPart : {
      entry : assign({
        part : ({context})=>context.part + 1,
        chatLog : ({context})=>{
          return [
            ...context.chatLog,
            {type : 'bot', text : context.questions[context.part]}
          ]
        }
      })
    },
    complete: {
      type: 'final',
      entry: assign({
        chatLog: ({context}) => [
          ...context.chatLog,
          { type: 'bot', text: `Quiz complete! Your final score is ${context.score}/${context.questions.length}.` }
        ]
      })
    }
  }
}, {
  guards: {
    isCorrect: ({context,event}) => {
        console.log(context)
        console.log(event)
      const currentQuestion = context.questions[context.currentQuestionIndex];
      return currentQuestion.correctAnswer === event.id;
    },
    isTest : ({context,event}) => {
      const test = context.questions[context.currentQuestionIndex].test;
      console.log(test)
      return test
    }
  }
});

export default quizMachine;
