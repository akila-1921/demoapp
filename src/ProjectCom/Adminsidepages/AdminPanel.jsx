
// import React, { useState, useEffect } from 'react';
// import Example from './Demofile';

// export default function AdminPanel() {
//   const [posting, setPosting] = useState([]);
//   const [options, setOptions] = useState(['', '', '', '']);

//   const shuffleArray = (array) => {
//     // Fisher-Yates shuffle algorithm
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };

//   const OptionChange = (index, value) => {
//     setOptions((prevOptions) => {
//       const newOptions = [...prevOptions];
//       newOptions[index] = value;
//       return newOptions;
//     });
//   };

//   useEffect(() => {
//     fetch('https://6503ec69c8869921ae244598.mockapi.io/akila')
//       .then((res) => res.json())
//       .then((result) => {
//         setPosting(shuffleArray(result));
//       });
//   }, []);

//   return (
//     <div>
//       <ol>
//         {posting.map((post) => (
//           <li key={post.id}>
//             {post.text} <br /> {post.options}
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import Example from '../Demofile';

export default function AdminPanel() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [options, setOptions] = useState(['', '', '', '']);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const OptionChange = (index, value) => {
    setOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index] = value;
      return newOptions;
    });
  };

  useEffect(() => {
    fetch('https://6503ec69c8869921ae244598.mockapi.io/akila')
      .then((res) => res.json())
      .then((result) => {
        // Shuffle the questions before setting the state
        setQuestions(shuffleArray(result));
      });
  }, []);

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === questions.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {questions.length > 0 && (
        <div>
          <p>{questions[currentQuestionIndex].text}</p>
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={option}
                  onChange={(e) => OptionChange(index, e.target.value)}
                />
              </li>
            ))}
          </ul>
          <button onClick={nextQuestion}>Next Question</button>
        </div>
      )}
      {/* <Example/> */}
    </div>
  );
}
