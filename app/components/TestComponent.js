import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';

export default class TestComponent extends Component {


    render() {     
        return (<div onClick={this.props.handleClick}>this is testcomponent
            </div>
        );
    }
}
