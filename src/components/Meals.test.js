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

describe('MealsComponent', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    let det = spy()
    ReactDOM.render(<Meals guestMealPlan={["John on 2017-9-16", "Brian on 2017-9-17"]} />, div);
  });

  it('check number of rows rendered', () => {
    let meals = mount(<Meals guestMealPlan={["Sarthak on 2017-9-16", "Sarthak on 2017-9-17", "Sparsh on 2017-9-16", "Sparsh on 2017-9-17"]} />)
    let len = meals.find('li').length;
    expect(len).toEqual(12);
  });
});
