import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
// import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppointmentPage from './components/AppointmentPage';
import RegisterPage from './components/RegisterPage';
import { toFetchSchedules } from './state/actions';
import { getSelectedDate } from './state/selectors';

export function App(props) {
  const { dToFetchSchedules, selectedDate } = props;

  useEffect(() => {
    dToFetchSchedules(dayjs(selectedDate));
  }, [dToFetchSchedules, selectedDate]);

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
  return {
    selectedDate: getSelectedDate(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dToFetchSchedules: date => dispatch(toFetchSchedules(date))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
