import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Index from '../client/Index';


test('hey', () => {
  const tree = shallow(<Index />);
  expect(tree).toMatchSnapshot();
});
