window.React = require('react');
var ProductData = require('./ProductData');
var ShoppingCartAPI = require('./utils/ShoppingCartAPI');
var ShoppingCartApp = require('./components/ShoppingCartApp.react');

ProductData.init();

ShoppingCartAPI.getProductData();

React.render(
  <ShoppingCartApp />,
  document.getElementById('shopping-cart')
);