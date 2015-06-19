var React = require('react');
var ShoppingCartActions = require('../actions/ShoppingCartActions');

// Flux product view
var Product = React.createClass({

  // Add item to cart via Actions
  addToCart: function(event){
    var sku = this.props.selected.sku;
    var update = {
      name: this.props.product.name,
      type: this.props.selected.type,
      price: this.props.selected.price
    };
    ShoppingCartActions.addToCart(sku, update);
    ShoppingCartActions.updateCartVisible(true);
  },

  // Select product variation via Actions
  selectStock: function(event){
    ShoppingCartActions.selectProduct(event.target.value);
  },

  // Render product View
  render: function() {
    var ats = (this.props.selected.sku in this.props.cartitems) ?
      this.props.selected.left - this.props.cartitems[this.props.selected.sku].quantity :
      this.props.selected.left;
    return (
      <div className="flux-product">
        <img src={this.props.product.image}/>
        <div className="flux-product-detail">
          <h1 className="name">{this.props.product.name}</h1>
          <p className="description">{this.props.product.description}</p>
          <p className="price">Price: ${this.props.selected.price}</p>
          <select onChange={this.selectStock}>
            {this.props.product.stock.map(function(variant, index){
              return (
                <option key={index} value={index}>{variant.type}</option>
              )
            })}
          </select>
          <button type="button" onClick={this.addToCart} disabled={ats  > 0 ? '' : 'disabled'}>
            {ats > 0 ? 'Add To Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    );
  },

});

module.exports = Product;