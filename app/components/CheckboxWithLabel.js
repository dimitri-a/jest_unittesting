// //todo is this the right way of using a stateless component? can I still pass props in??


import React, {Component} from 'react';

export default class CheckboxWithLabel extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    handleOnchange = () => {
        console.log('handleonchange in subcomp=');
        this.props.onChange();
    }

    render() {
        return (<div>
            <label>
                <input type="checkbox" checked={this.props.isChecked} onChange={this.handleOnchange}/>
                {this.props.isChecked ? this.props.labelOn : this.props.labelOff}
            </label>
        </div>)
    }
}
