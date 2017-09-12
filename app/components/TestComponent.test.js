import React, {Component} from 'react';
import {shallow} from 'enzyme';
import { expect} from 'chai';
import TestComponent from './TestComponent';

describe('TestComponent', () => {
    it('should render ...', () => {
            let wrapper = shallow(<TestComponent/>);
            console.log('wrapper.debug()=',wrapper.debug());
            expect(wrapper.contains([
                "this is testcomponent",
            ])).to.equal(true);
        }
    );

    it('handleClick', () => {

        let onClickHandler = jest.fn()
        let props = { handleClick: onClickHandler }

        let component = shallow(<TestComponent {...props} />)

        component.find('button').first().props().onClick()
        expect(onClickHandler).toHaveBeenCalled()
    })
});
