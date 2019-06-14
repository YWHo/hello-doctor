import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { fetchSchedule } from './apiRequester';

function App() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetchSchedule('2019-06-13')
    .then(json => {
      console.log('returned:\n', json);
      setSchedules(json);
    });
  }, []);

  const nameList = Array.from(schedules).map((item, idx) => {
    return (
      <div key={idx}>
        <div>Name: {item.Name}</div>
        <div>Title: {item.Title}</div>
        <br />
      </div>
    );
  });

  return (
    <div>
      { nameList }
    </div>
  ) 
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
