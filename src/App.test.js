import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { spy } from 'sinon';

configure({ adapter: new Adapter() });

describe('AppComponent', () => {
  it('check if meals are generated in main component', () => {
    let main = mount(<App />);
    main.instance().generateMealPLan(["Sarthak on 2017-9-16", "Sarthak on 2017-9-17", "Sparsh on 2017-9-16", "Sparsh on 2017-9-17"])
    expect(main.state().guestMealPlan).toEqual(["Sarthak on 2017-9-16", "Sarthak on 2017-9-17", "Sparsh on 2017-9-16", "Sparsh on 2017-9-17"]);
  });
});
