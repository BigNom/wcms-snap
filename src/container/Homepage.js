import React, { Component } from 'react';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import productActions from '../actions/products'

import './Homepage.css';
import ProductGrid from '../components/ProductGrid'
import ShoppingList from '../components/ShoppingList'


const style = {
  margin: 12,
};

class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="HomepageContainer">
            <div className="ProductsContainer">
            <div>
              <Paper zDepth={1} style={{padding: '1em'}}>
                <span>Presets: </span>
                <RaisedButton 
                label="UAVFutures $100 build" primary={true} style={style} 
                onClick={() => this.props.selectPreset('uav_futures_100')} />
                <RaisedButton 
                label="30 AMP alie build" primary={true} style={style} 
                onClick={() => this.props.selectPreset('30a_alien')} />
              </Paper>
            </div>
              <ProductGrid
                products={this.props.products}
                onProductSelect={this.props.onProductSelect}
                onProductDeselect={this.props.onProductDeselect}
              />
            </div>
            <div className="ShoppingListContainer">
              <ShoppingList products={this.props.products} onProductDeselect={this.props.onProductDeselect} />
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onProductSelect: (product) => {
      dispatch(productActions.productSelected(product))
    },
    onProductDeselect: (product) => {
      dispatch(productActions.productDeSelected(product))
    },
    selectPreset: (name) => {
      dispatch(productActions.selectPreset(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);