import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
// import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppointmentPage from './components/AppointmentPage';
import RegisterPage from './components/RegisterPage';
import * as actions from './state/actions';
import * as selectors from './state/selectors';

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
    selectedDate: selectors.getSelectedDate(state)
  };
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
