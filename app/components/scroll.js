import React, {Component} from 'react';

class Scroll extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = {position: 0, pageSize: 20, displayedNames: this.props.names.slice(0, 20)}
    }

    // next = ()=> {
    //
    //    // console.log(this);
    //     this.setState({position: this.state.position + this.state.pageSize},
    //     () => {
    //         this.setState({displayedNames: this.props.names.slice(this.state.position,this.state.position+this.state.pageSize)});
    //     });
    //
    // }

    onScroll = () =>{
        console.log('onscroll');
        this.setState({position: this.state.position + this.state.pageSize},
            () => {
                this.setState({displayedNames: this.props.names.slice(this.state.position,this.state.position+this.state.pageSize)});
            });
    }
    
    render() {
        let display = this.state.displayedNames.map
        (
            (name) => (
                <div> {name}</div>
            )
        )

        return (
            <div id='container' onScroll={this.onScroll}>
                <button onClick={this.next}>next 20</button>
                <div className="scroll">
                    {display}
                </div>


            </div>
        );
    }
}


export default Scroll;