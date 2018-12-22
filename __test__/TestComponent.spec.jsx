import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TestComponent from '../client/TestComponent';


test('hey', () => {
  const tree = shallow(<TestComponent />);
  expect(tree).toMatchSnapshot();
});
