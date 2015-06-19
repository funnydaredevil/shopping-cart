var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ShoppingCartConstants = require('../constants/ShoppingCartConstants');
var _ = require('underscore');

// Define initial data points
var _products = {}, _cartVisible = false;

function add(sku, update) {
  update.quantity = sku in _products ? _products[sku].quantity + 1 : 1;
  _products[sku] = _.extend({}, _products[sku], update)
}

function setCartVisible(cartVisible) {
  _cartVisible = cartVisible;
}

function removeItem(sku) {
  delete _products[sku];
}

// Extend Cart Store with EventEmitter to add eventing capabilities
var ShoppingCartStore = _.extend({}, EventEmitter.prototype, {

  getCartItems: function() {
    return _products;
  },

  getCartCount: function() {
    return Object.keys(_products).length;
  },

  getCartTotal: function() {
    var total = 0;
    for(product in _products){
      if(_products.hasOwnProperty(product)){
        total += _products[product].price * _products[product].quantity;
      }
    }
    return total.toFixed(2);
  },

  getCartVisible: function() {
    return _cartVisible;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    // Respond to CART_ADD action
    case ShoppingCartConstants.CART_ADD:
      add(action.sku, action.update);
      break;

    // Respond to CART_VISIBLE action
    case ShoppingCartConstants.CART_VISIBLE:
      setCartVisible(action.cartVisible);
      break;

    // Respond to CART_REMOVE action
    case ShoppingCartConstants.CART_REMOVE:
      removeItem(action.sku);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  ShoppingCartStore.emitChange();

  return true;

});

module.exports = ShoppingCartStore;