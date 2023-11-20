import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import './App.css';
import ErrorBoundary from '../../ErrorBoundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppointmentPage from '../AppointmentPage';
import RegisterPage from '../RegisterPage';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

export default function App() {
  const { toFetchSchedules } = useActions();
  const { selectedDate } = useTypedSelector(
    (state) => state.pendingAppointmentReducer,
  );

  useEffect(() => {
    toFetchSchedules(dayjs(selectedDate));
    // eslint-disable-next-line
  }, [selectedDate]);

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
