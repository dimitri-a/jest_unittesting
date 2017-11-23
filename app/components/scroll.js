import React, {Component} from 'react';

class Scroll extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = {position: 0, pageSize: 20, displayedNames: this.props.names.slice(0, 20)}
    }

    next = ()=> {

       // console.log(this);
        this.setState({position: this.state.position + this.state.pageSize},
        () => {
            console.log('this.state.position=',this.state.position);
            console.log('this.state.pageSize=',this.state.pageSize);
            //console.log('this.state.pageSize=',this.state.pageSize);
            console.log('this.props.names=',this.props.names);
            this.setState({displayedNames: this.props.names.slice(this.state.position,this.state.position+this.state.pageSize)});
        });

    }

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
                    {this.state.displayedNames}
                </div>

                <button onClick={this.next}>next 20</button>
            </div>
        );
    }
}


export default Scroll;