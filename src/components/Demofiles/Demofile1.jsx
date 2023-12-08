// import React ,{useState,useEffect} from 'react'
// import Example from './Demofile'

// export default function AdminPanel() {

//   const [posting,setposting] = useState([]);
//   const [options, setOptions] = useState(['', '', '', '']);
//   const OptionChange = (index, value) => {
//     setOptions(prevOptions => {
//       const newOptions = [...prevOptions];
//       newOptions[index] = value;
//       return newOptions;
//     });
//   };
//   useEffect(() => {
//     fetch('https://6503ec69c8869921ae244598.mockapi.io/akila')
//       .then((res) => res.json())
//       .then((result) => {
//         setposting(result);
//       });
//   }, []);
 
//   return (
//     <div><ol>
//     {posting.map((post) => (
//       <li key={post.id}>{post.text} <br /> {post.options}
//      </li>
//     ))}
//     </ol>
//     {/* <Example/> */}
//     </div>
//   )
// }