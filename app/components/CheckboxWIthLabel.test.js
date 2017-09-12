// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */

import React from 'react';
import {shallow} from 'enzyme';
import CheckboxWithLabel from './CheckboxWithLabel';

it('CheckboxWithLabel changes the text after click', () => {

    let cb = shallow(<CheckboxWithLabel labelOff="uit" labelOn="aan"/>)

    //todo http://airbnb.io/enzyme/docs/api/ReactWrapper/text.html
    //todo type 2 assert text property
    expect(cb.text()).toEqual('uit');

    //todo expect(wrapper.find('div.some-class')).to.have.length(3);
    cb.find('input').simulate('change');

    console.log('cb.fin',cb.find('input'));

    //todo type 6 length of component
    expect(cb.find('input').length).toEqual(1);

});
