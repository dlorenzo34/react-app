import React, { Component } from 'react';
import './App.css';

// Components
import Product from '../product/product';
import WishList from '../wishlist/wishlist';

// Services
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {

  constructor(props) {
    super(props);
    http.getProducts();

    this.state = {products:[]};

    //Bind functions
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);
    this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getProducts().then(data => {
      self.setState({products: data})
    }, err => {

    })
  }

  productList = () => {
    const list = this.state.products.map((product) => 
      <div className="col-sm-4" key={product._id}>
        <Product product={product} />
      </div>
    );

    return (list);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-main container-fluid">
            <div className="row">
              <div className="col-sm-8">
                <div className="row">
                  {this.productList()}
                </div>
              </div>
              <div className="col-sm-4">
                <WishList />                
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
