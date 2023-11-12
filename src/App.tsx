import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
// import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppointmentPage from './components/AppointmentPage';
import RegisterPage from './components/RegisterPage';
import { toFetchSchedules } from './state/timeSlots';
import { getSelectedDate } from './state/pendingAppointment';

interface AppProps {
  dToFetchSchedules: (date: dayjs.Dayjs | Date) => void;
  selectedDate: dayjs.Dayjs;
}

export function App(props: AppProps) {
  const { dToFetchSchedules, selectedDate } = props;

  useEffect(() => {
    dToFetchSchedules(dayjs(selectedDate));
  }, [dToFetchSchedules, selectedDate]);

  return (
    <ErrorBoundary>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<AppointmentPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

const mapStateToProps = (state: any) => {
  return {
    selectedDate: getSelectedDate(state),
  };
};

function mapDispatchToProps(dispatch: any) {
  return {
    dToFetchSchedules: (date: dayjs.Dayjs | Date) =>
      dispatch(toFetchSchedules(date)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
