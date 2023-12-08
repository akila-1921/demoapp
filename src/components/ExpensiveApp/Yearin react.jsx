// import React, { useState } from 'react';

// function YearSelector() {
//   const [selectedYear, setSelectedYear] = useState(0);

//   const startYear = 2020; 
//   const endYear = new Date().getFullYear();

//   const years = [];
//   for (let year = endYear; year >= startYear; year--) {
//     years.push(year);
//   }

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   return (
//     <div>
//       <label>Select a Year:</label>
//       <select value={selectedYear} onChange={handleYearChange}>
//         {years.map((year) => (
//           <option key={year} value={year}>
//             {year}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default YearSelector;

import React, { useEffect, useState } from 'react';

function App1() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://6503ec69c8869921ae244598.mockapi.io/akila')
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
        console.log(result);
      });
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          ID: {post.id} Date:{post.Date}
        </li>
      ))}
    </ul>
  );
}

export default App1;
