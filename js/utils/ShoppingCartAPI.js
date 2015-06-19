var ShoppingCartActions = require('../actions/ShoppingCartActions');

module.exports = {

  // Load mock product data from localStorage into ProductStore via Action
  getProductData: function() {
    var data = JSON.parse(localStorage.getItem('product'));
    ShoppingCartActions.receiveProduct(data);
  }

};