// import React, { Component } from 'react';
//
//
// const Cart = ({products, actions}) => (
//     <div>
//         hello
//         <AddProduct addProduct={actions.addProduct}></AddProduct>
//         <Products products={products}></Products>
//     </div>
// )
//
// const mapStateToProps = state => ({
//     products: state.products
// })
//
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(AddActions, dispatch)
// })
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Cart)


import React, {Component} from 'react';
import AddProduct from './addproduct';
import {connect} from 'react-redux';
import Products from './products';
import {bindActionCreators} from 'redux'
import * as AddActions from './actions/addaction'

export class Cart extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        console.log('this.props=', this.props);
        debugger;
        return (
            <div>
                <AddProduct addProduct={this.props.actions.addProduct}></AddProduct>
                <Products products={this.props.products}></Products>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AddActions, dispatch)
})

const mapStateToProps = function (store) {
    return {
        products: store
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
