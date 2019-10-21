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

describe('BookingsComponent', () => {

  it('check parsing functions', () => {
    let det = spy();
    let det2 = spy();
    let bookings = mount(<Bookings mealPlan={det} invalidBookings={det2}/>)
    bookings.find('.guestList').instance().value = "Sarthak\nSparsh";
    bookings.find('.guestDateList').instance().value = "2017-09-15 to 2017-09-16\n2017-09-16 to 2017-09-17";
    bookings.instance().getGuestInfo();
    expect(det.calledWith(["Sarthak on 2017-9-15", "Sarthak on 2017-9-16", "Sparsh on 2017-9-16", "Sparsh on 2017-9-17"])).toEqual(true);
    expect(det2.calledWith([])).toEqual(true);
  });

  it('check if error customers and valid customers are segregated', () => {
    let det = spy();
    let det2 = spy();
    let bookings = mount(<Bookings mealPlan={det} invalidBookings={det2}/>)
    bookings.find('.guestList').instance().value = "Sarthak\nSparsh\nMathew\nAndrew";
    bookings.find('.guestDateList').instance().value = "2017-09-15 to 2017-09-16\n2017-09-16 to 2017-09-17\n 2017\n2017/2018";
    bookings.instance().getGuestInfo();
    expect(det.calledWith(["Sarthak on 2017-9-15", "Sarthak on 2017-9-16", "Sparsh on 2017-9-16", "Sparsh on 2017-9-17"])).toEqual(true);
    expect(det2.calledWith(["Mathew", "Andrew"])).toEqual(true);
  });
});
