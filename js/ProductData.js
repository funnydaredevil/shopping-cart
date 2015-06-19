module.exports = {
  init: function() {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '123123',
        name: 'Evian',
        image: 'http://www.manydrinks.com/wp-content/uploads/2014/07/evian_natural_mineral_water_50cl.jpg',
        description: 'To make sure you stay well hydrated day and night, wherever you go and whatever you’re up to, evian has a convenient bottle that’s right for you. At work or at home, opt for the larger formats (1 liter or 1.5 liter bottles). For sports, travel or life on-the-go, the smaller (750ml, 500ml, 330ml) sizes fit easily in your purse, pocket, briefcase or knapsack.',
        stock: [
          {
            sku: '987987',
            type: '330ml Bottle',
            price: 2.45,
            left: 136

          },
          {
            sku: '987988',
            type: '500ml Bottle',
            price: 3.45,
            left: 14

          },
          {
            sku: '987989',
            type: '750ml Bottle',
            price: 4.00,
            left: 200

          }
        ]
      }
    ]));
  }

};