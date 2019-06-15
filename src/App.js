import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { fetchSchedule } from './apiRequester';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import RegisterPage from './components/RegisterPage'

function App() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetchSchedule('2019-06-13')
    .then(json => {
      setSchedules(json);
    });
  }, []);

  return (
    <Router>
      <div>
        <Route exact path="/" component={() => <HomePage schedules={schedules} />} />
        <Route path="/register" component={() => <RegisterPage />} />
      </div>
    </Router>
  )
}

export default App;
