import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import AppointmentPage, { showTimeCards } from './AppointmentPage';
import { schedule as ScheduleType } from '../../state/state-interface';
import { DAY } from '../../shared/constants';

// Mock the Redux store
const mockStore = configureStore([]);
const store = mockStore({
  pendingAppointmentReducer: {
    selectedDate: new Date(0),
    selectedDayPart: DAY.MORNING,
    selectedTimeID: '1',
  },
  providerProfileReducer: {
    Degrees: [],
    Description: '',
    Id: '',
    Languages: [],
    Name: '',
    PictureName: '',
    PictureURL: '',
    Title: '',
  },
  timeSlotsReducer: {
    schedules: [
      {
        Id: 1,
        Title: 'Dr. Smith',
        AvailableSlots: { id1001: '9:00 AM', id1002: '9:00 AM' },
      },
      {
        Id: 2,
        Title: 'Dr. Johnson',
        AvailableSlots: { id1003: '9:30 AM', id1004: '10:30 AM' },
      },
    ],
  },
  uiShowReducer: {
    showingCalendar: false,
    showingProfile: false,
  },
});

// Mock the custom hooks
jest.mock('../../hooks/useActions');

describe('AppointmentPage Component', () => {
  it('renders AppointmentPage component correctly', () => {
    const mockUseActions = jest.fn();
    mockUseActions.mockReturnValue({});
    jest.mock('../../hooks/useActions', () => mockUseActions);

    render(
      <Provider store={store}>
        <AppointmentPage />
      </Provider>,
    );

    // Add more assertions based on your component's structure
    expect(screen.getByText('MonthContainer')).toBeInTheDocument();
    expect(screen.getByText('DateSelector')).toBeInTheDocument();
  });

  it('renders TimeCard components based on schedules', () => {
    const mockUseActions = jest.fn();
    mockUseActions.mockReturnValue({});
    jest.mock('../../hooks/useActions', () => mockUseActions);

    const sampleSchedules: ScheduleType[] = [
      {
        Id: 1,
        Title: 'Dr. Smith',
        AvailableSlots: { id1001: '9:00 AM', id1002: '9:00 AM' },
      },
      {
        Id: 2,
        Title: 'Specialist',
        Name: 'Dr. Johnson',
        AvailableSlots: { id1003: '9:30 AM', id1004: '10:30 AM' },
      },
    ];

    render(<>{showTimeCards({ schedules: sampleSchedules })}</>);

    // Add more assertions based on your TimeCard component's structure
    expect(screen.getByText('Dr. Smith')).toBeInTheDocument();
    expect(screen.getByText('9:00 AM')).toBeInTheDocument();
    expect(screen.getByText('Dr. Johnson')).toBeInTheDocument();
    expect(screen.getByText('10:00 AM')).toBeInTheDocument();
  });
});
