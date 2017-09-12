import React, {Component} from 'react';

import CheckboxWithLabel from './CheckboxWithLabel';

export class ContainerForCheckbox extends Component {

    constructor(props) {
        super(props);
        this.state = {isChecked: false};
    }

    handleChange = () =>{
        console.log('handlechange in container');
        this.setState({isChecked:!this.state.isChecked});
    }

    render() {
        console.log('this.props=', this.props);
        debugger;
        return (
            <div>
                <CheckboxWithLabel isChecked={this.state.isChecked} onChange={this.handleChange} labelOn="hoer" labelOff="yep"></CheckboxWithLabel>
            </div>
        );
    }

}