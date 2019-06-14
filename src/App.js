import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { fetchSchedule } from './apiRequester';
import { mockFetchSchedule } from './mocks/mockApi'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    mockFetchSchedule('2019-06-13')
    .then(json => {
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
    <Router>
      <div>
        { nameList }
        <Link to="/register">Register Page</Link>
    
      </div>
      <Route path="/register" component={registerPage} />
    </Router>
  ) 
}

function registerPage() {
  return (
    <div>Hello World from register page</div>
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
