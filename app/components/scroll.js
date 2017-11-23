import React, {Component} from 'react';

import Clusterize from 'clusterize.js';

const rows = [];
const maxRows = 10000;
for (let i = 0; i < maxRows; ++i) {
    rows[i] = (
        <div style={{borderBottom: '1px solid #f0f0f0', padding: '5px 10px'}}>Item #{i + 1}</div>
    );
}


class Scroll extends Component {
    render() {
        let display = this.props.names.map
        (
            (name) => (
                <div> {name}</div>
            )
        )

        return (
            <div>

                {display}

            </div>
        );
    }
}


export default Scroll;