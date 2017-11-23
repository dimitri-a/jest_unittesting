import React, {Component} from 'react';

class Scroll extends Component {
    render() {
        let display = this.props.names.map
        (
            (name) => (
                <div> {name}</div>
            )
        )

        return (
            <div id='container'>


            <div className="scroll">

                {display}

            </div>
            </div>
        );
    }
}


export default Scroll;