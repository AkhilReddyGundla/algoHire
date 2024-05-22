import React from 'react';
import { useMachine } from '@xstate/react';
import quizMachine from '../machine/Quizmachine';

function ChatMessage({ message, options, onOptionSelect }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
      <p className="text-lg">{message}</p>
      {options && (
        <div className="flex flex-col space-y-2 mt-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => {console.log(option.id);return onOptionSelect(option.id)}}
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

  const { chatLog, questions, currentQuestionIndex } = state.context;
  
  
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


      {state.matches('questioning') && (
       ( 
       <ChatMessage
          message={questions[currentQuestionIndex].text}
          options={questions[currentQuestionIndex].options}
          onOptionSelect={handleOptionSelect}
        />)
      )}

      {state.matches('complete') && (
        <ChatMessage message={`Quiz complete! Your final score is ${state.context.score}/${questions.length}.`} />
      )}


    </div>
  );
}

export default Quiz;
