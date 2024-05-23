import React from 'react';
import { useMachine } from '@xstate/react';
import quizMachine from '../machine/Quizmachine';

function ChatMessage({ message, options, onOptionSelect }) {
  // console.log(options)

  

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
      <p className="text-lg">{message}</p>
      {options && (
        <div className="flex flex-col space-y-2 mt-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => onOptionSelect(option.id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {option.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Quiz() {
    const [state, send] = useMachine(quizMachine);

    const handleOptionSelect = (optionId) => {
      send({ type: 'ANSWER', id: optionId });
    };

    const onOptionSelect = (optionId) =>{
      console.log(optionId)
      send({type : 'CHOOSEN', id : optionId})
    }

  const { chatLog, questions, currentQuestionIndex } = state.context;
  
  // console.log(chatLog[chatLog.length - 1])
  
  return (
    <div className="p-4">
       {chatLog.map((log, index) => (
        <div
          key={index}
          className={`flex ${log.type === 'bot' ? 'justify-start text-start' : 'justify-end text-end'} mb-2`}
        >
          <ChatMessage message={log.text} />
        </div>
      ))}


      {state.matches('idle') && (
        <div className="text-center">
          <button
            onClick={() => send({ type: 'START' })}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          >
            Start Quiz
          </button>
        </div>
      )}


      {state.matches('learning') && (
       ( 
       <ChatMessage
          message={questions[0][currentQuestionIndex].text}
          options={questions[0][currentQuestionIndex].options}
          onOptionSelect={onOptionSelect}
        />)
      )}

      {state.matches('complete') && (
        <ChatMessage message={chatLog[chatLog.length - 1].text} />
      )}


    </div>
  );
}

export default Quiz;
