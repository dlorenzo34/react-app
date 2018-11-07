import React, { Component } from 'react';
import './product-condensed.css';
import DataService from '../services/data-service';

let ds = new DataService();

class ProductCondensed extends Component {

    constructor(props) {
        super(props);

        //Bind functions
        this.removeProduct = this.removeProduct.bind(this);
    }

    removeProduct = () => {
        ds.removeWishListItem(this.props.product);
    }

    render () {
        return (
            <li className="list-group-item product-condensed">
                <a className="btn btn-outline-danger" onClick={ () => this.removeProduct()}>X</a>
                <p>{this.props.product.title} | <strong>${this.props.product.price}</strong></p>
            </li>
        );
    }
}

export default ProductCondensed;