// /*
//   This example requires some changes to your config:
  
//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */
// export default function Example() {
//   return (
//     <>
//       {/*
//         This example requires updating your template:

//         ```
//         <html class="h-full bg-white">
//         <body class="h-full">
//         ```
//       */}
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           {/* <img
//             className="mx-auto h-10 w-auto"
//             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//             alt="Your Company"
//           /> */}
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">   Sign in to your account </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" action="#" method="POST">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">  Email address </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm text-gray-500">
//             Not a member?{' '}
//             <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//               Start a 14 day free trial
//             </a>
//           </p>
//         </div>
//       </div>
//     </>
//   )
// }---------------------------------------------------------------------------------------------------------
import React, { useState, useEffect } from 'react';

const Example = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['','','','']);
  const [correctOption, setCorrectOption] = useState('');
  
  const OptionChange = (index, value) => {
    setOptions(prevOptions => {
      const newOptions = [...prevOptions];
      newOptions[index] = value;
      return newOptions;
    });
  };

  const handleSubmit = async () => {
    const newQuestion = {
      text: question,
      options: options, 
      correctOption: correctOption, 
    };

    try {
      const response = await fetch('https://6503ec69c8869921ae244598.mockapi.io/akila', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newQuestion),
      });

      if (response.ok) {
        console.log('Question submitted successfully');    
      } else {
        console.error('Failed to submit question');
      }
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };
  

  return (
    // {*********************************************************************************}
    // <div>
    //   <h2>Question Page</h2>
    //   <label> Question:<textarea type="text" value={question} onChange={(e) => setQuestion(e.target.value)} /></label>
    //   <ul>
    //     {options.map((option, index) => (
    //       <li key={index}>
    //         <label> Option {index + 1}: <input type="text" value={option} onChange={(e) => OptionChange(index, e.target.value)} /></label>
    //       </li>
    //     ))}
    //   </ul>
      
    //   <label> Correct Option: <input type="text" value={correctOption} onChange={(e) => setCorrectOption(e.target.value)} /> </label>
    //   <button onClick={handleSubmit}>Submit Question</button>
    // </div>

    // {********************************************************************************}
    <> 
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> ADD QUESTIONS </button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal"> USER DETAILS</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="exampleModalLabel">QUESTIONS PAGE </h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h5>ADD QUESTIONS</h5>
      <label> Question:<textarea type="text" value={question} onChange={(e) => setQuestion(e.target.value)} /></label>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label> Option {index + 1}: <input type="text" value={option} onChange={(e) => OptionChange(index, e.target.value)} /></label>
          </li>
        ))}
      </ul>
      
      <label> Correct Option: <input type="text" value={correctOption} onChange={(e) => setCorrectOption(e.target.value)} /> </label>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>ADD</button>
      </div>
    </div>
  </div>
</div>
</>
    
  );
};

export default Example;


