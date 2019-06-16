import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import RegisterPage from './components/RegisterPage'
import actions from './state/actions'

export function App(props) {
  const { dToFetchSchedules } = props 

  useEffect(() => {
    dToFetchSchedules('2019-06-13');
  }, []);

  return (
    <Router>
      <div>
        <Route exact path="/" component={() => <HomePage />} />
        <Route path="/register" component={() => <RegisterPage />} />
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return { }
}

function mapDispatchToProps (dispatch) {
  return {
    dToFetchSchedules: (dateStr) => dispatch(actions.toFetchSchedules(dateStr)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
