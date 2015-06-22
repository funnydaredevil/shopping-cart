var React = require('react');
var ShoppingCartStore = require('../stores/ShoppingCartStore');
var ProductStore = require('../stores/ProductStore');
var Product = require('./Product.react');
var ShoppingCart = require('./ShoppingCart.react');

// Method to retrieve state from Stores
function getCartState() {
  return {
    products: ProductStore.getProducts(),
    selectedProduct: ProductStore.getSelected(),
    cartItems: ShoppingCartStore.getCartItems(),
    cartCount: ShoppingCartStore.getCartCount(),
    cartTotal: ShoppingCartStore.getCartTotal(),
    cartVisible: ShoppingCartStore.getCartVisible()
  };
}

// Define main Controller View
var ShoppingCartApp = React.createClass({

  // Get initial state from stores
  getInitialState: function() {
    return getCartState();
  },

  // Add change listeners to stores
  componentDidMount: function() {
    ProductStore.addChangeListener(this._onChange);
    ShoppingCartStore.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this._onChange);
    ShoppingCartStore.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function() {
    var selectedProduct = this.state.selectedProduct;
    var cartItems = this.state.cartItems;
    var productsNode = this.state.products.map(function(product){
      return(
        <Product key={product.id} product={product} cartitems={cartItems} selected={selectedProduct} />
        // <Product product={product} cartitems={this.state.cartItems} selected={this.state.selectedProduct} />
      );
    });
    return (
      <div className="shopping-cart-app">
        <ShoppingCart products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal} visible={this.state.cartVisible} />
        {productsNode}
      </div>
    );
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getCartState());
  }

});

module.exports = ShoppingCartApp;