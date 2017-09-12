// Copyright 2004-present Facebook. All Rights Reserved.

import React from 'react';

export default class CheckboxWithLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isChecked: false};
    }

    onChange = () => {
        this.setState({isChecked: !this.state.isChecked});
    }

    render() {
        return (
            <div>
                <label>
                    <input
                        type="checkbox"
                        onChange={this.onChange}
                    />

                </label>

                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
            </div>
        );
    }
}
