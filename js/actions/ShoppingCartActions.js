var AppDispatcher = require('../dispatcher/AppDispatcher');
var ShoppingCartConstants = require('../constants/ShoppingCartConstants');

// Define actions object
var FluxCartActions = {

  receiveProduct: function(data) {
    AppDispatcher.handleAction({
      actionType: ShoppingCartConstants.RECEIVE_DATA,
      data: data
    });
  },

  selectProduct: function(index) {
    AppDispatcher.handleAction({
      actionType: ShoppingCartConstants.SELECT_PRODUCT,
      data: index
    });
  },

  addToCart: function(sku, update) {
    AppDispatcher.handleAction({
      actionType: ShoppingCartConstants.CART_ADD,
      sku: sku,
      update: update
    });
  },

  removeFromCart: function(sku) {
    AppDispatcher.handleAction({
      actionType: ShoppingCartConstants.CART_REMOVE,
      sku: sku
    });
  },

  updateCartVisible: function(cartVisible) {
    AppDispatcher.handleAction({
      actionType: ShoppingCartConstants.CART_VISIBLE,
      cartVisible: cartVisible
    });
  }

};

module.exports = FluxCartActions;