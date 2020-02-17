import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';
import { findByTestAtrr } from './../../utills';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('it should render without error', () => {
        const wrapper = findByTestAtrr(component, 'navBar');
        expect(wrapper.length).toBe(1);
    });

    it('it should render a logo', () => {
        const logo = findByTestAtrr(component, 'dashboard-header');
        expect(logo.length).toBe(1);
    });
});
