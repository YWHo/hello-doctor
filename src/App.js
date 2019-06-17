import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppointmentPage from './components/AppointmentPage';
import RegisterPage from './components/RegisterPage';
import actions from './state/actions';

export function App(props) {
  useEffect(() => {
    const { dToFetchSchedules } = props;
    dToFetchSchedules(moment().format('YYYY-MM-DD'));
  }, [props]);

  return (
    <ErrorBoundary>
      <Router>
        <div>
          <Route exact path='/' component={() => <AppointmentPage />} />
          <Route path='/register' component={() => <RegisterPage />} />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

const mapStateToProps = state => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {
    dToFetchSchedules: dateStr => dispatch(actions.toFetchSchedules(dateStr))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
