// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */

import React from 'react';
import {shallow} from 'enzyme';
import CheckboxWithLabel from './CheckboxWithLabel';

it('CheckboxWithLabel toggles the label after check', () => {

    const props = Object.assign({
        labelOn: 'aan',
        labelOff: 'uit',
        onChange: jest.fn()
    });

    //todo question how to mock/reference this onchange
    let cb = shallow(<CheckboxWithLabel {...props} />)


    //console.log('cb.debug()=', cb.debug());

    //todo http://airbnb.io/enzyme/docs/api/ReactWrapper/text.html
    //todo type 2 assert text property
    expect(cb.text()).toEqual('uit');


    //todo expect(wrapper.find('div.some-class')).to.have.length(3);
    //todo type 4 simulate


    cb.find('input').simulate('change');

    //console.log('cb =====', cb.find('input'));
   // expect(props.onChange).toBeCalled()

    //todo type 6 length of component/element
    expect(cb.text()).toEqual('aan');


});


