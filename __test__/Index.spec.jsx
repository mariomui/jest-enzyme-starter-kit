import React from 'react';
// import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'; // added this line
import Index from '../client/Index';


Enzyme.configure({ adapter: new Adapter() });


test('hey', () => {
  const tree = shallow(<Index />);
  expect(toJson(tree)).toMatchSnapshot();
});
