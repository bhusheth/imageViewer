import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';
import { findByTestAtrr } from './../../utills';

const setUp = (props={}) => {
    const component = shallow(<Footer {...props} />);
    return component;
}

describe('render footer', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('it should render without error', () => {
        const wrapper = findByTestAtrr(component, 'footerTest');
        expect(wrapper.length).toBe(1);
    });
})