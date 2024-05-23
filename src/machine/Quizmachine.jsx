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
    
  },
  states: {
    idle: {
      on: {
        START: {
          target: 'learning',
          actions: assign({
            chatLog: ({context}) => [
              ...context.chatLog,
              { type: 'bot', text: 'Welcome to the Quiz! Click an option to start.' }
            ]
          })
        }
      }
    },



    learning : {
      on : {
        CHOOSEN : {
          target : 'done',
          actions : assign({
            chatLog : ({context, event}) =>{
              console.log(event)
              return [
                ...context.chatLog,
                {
                  type : 'bot',
                  text : context.questions[0][context.currentQuestionIndex].text,
                },
                {
                  type : 'user',
                  text : context.questions[0][context.currentQuestionIndex].options.find((option)=>option.id === event.id).text
                }
              ]
            }
          })
        }
      }
    },

    done : {
      entry : assign({
        currentQuestionIndex : ({context})=>context.currentQuestionIndex+1
      }),
      always : 'feedback',
    },


    feedback: {
      always: [
        { target: 'complete', guard: ({context}) => context.currentQuestionIndex >= 12 },
        
        { target: 'learning', actions: assign({
          chatLog: ({context}) =>{
            return  [
                  ...context.chatLog,
                  { type: 'bot', text : context.questions[0][context.currentQuestionIndex-1].feedBack }
                ]
            } 
        })}
      ]
    },
    complete : {
      type : 'final',
      target : 'quizz',
      assign : ({context}) =>{
        context.currentQuestionIndex = 0
        console.log("TEST")
        return [
          ...context.chatLog,
          {type : 'bot', text : `Test your learnings`}
        ]
      }
    },
    

    quizz : {
      on : {
        ANSWER : [
          {
              target : 'correct',
              guard : 'isCorrect',
              actions : assign({
                chatLog : ({context, event})=> [
                  ...context.chatLog,
                  {type : 'bot', text : 'Correct!'},
                  {type : 'user', text : context.questions[1][currentQuestionIndex].text}
                ]
              }) 
          },
          {
              target : 'incorrect',
              actions : assign({
                chatLog : ({context})=> [
                  ...context.chatLog,
                  {type : 'bot', text : 'inCorrect'},
                  {type : 'user', text : context.questions[1][currentQuestionIndex].text}
                ]
              })
          }
        ]
      }
    },
    correct : {
      entry : assign({
        score : ({context})=>context.score + 1,
        currentQuestionIndex : ({context})=>context.currentQuestionIndex + 1,

      })
    },
    incorrect : {
      entry : assign({
        currentQuestionIndex : ({context})=>context.currentQuestionIndex + 1,
      })
    }

  }
}, {
  guards: {
    isCorrect: ({context,event}) => {
        console.log(context)
        console.log(event)
      const currentQuestion = context.questions[1][context.currentQuestionIndex];
      return currentQuestion.correctAnswer === event.id;
    }
  }
});

export default quizMachine;
