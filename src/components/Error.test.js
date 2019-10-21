import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import App from '../App';
import Bookings from './Bookings';
import Error from './Error';
import Meals from './Meals';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { spy } from 'sinon';

configure({ adapter: new Adapter() });

describe('ErrorComponent', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    let det = spy()
    ReactDOM.render(<Error errorData={["Mathew", "Anthony"]}/>, div);
  });

  it('check number of error messages rendered', () => {
    let error = mount(<Error errorData={["Sarthak", "Sparsh", "Mark", "Mathew", "Anthony"]} />)
    let len = error.find('p').length;
    expect(len).toEqual(5);
  });
});
