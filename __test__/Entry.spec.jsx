import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Entry from '../client/Entry';


test('hey', () => {
  const tree = shallow(<Entry />);
  expect(tree).toMatchSnapshot();
});
