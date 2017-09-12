// Copyright 2004-present Facebook. All Rights Reserved.

import React from 'react';

export default class CheckboxWithLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isChecked: false};
    }

    handleChange = () =>{
        this.setState({isChecked:!this.state.isChecked});
    }

    render = () => {
        return (<div>
            <label>
                <input type="checkbox" checked={this.state.isChecked} onChange={this.handleChange}/>
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
            </label>

        </div>)
    }

}
