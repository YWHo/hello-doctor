import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('Unit testing can run', () => {
  expect(true).toBeTruthy();
});

it('Snapshot can run', () => {
  expect(shallow(<App />)).toMatchSnapshot();
})

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
