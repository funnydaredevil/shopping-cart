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
      },
      {
        id: '123124',
        name: 'Coca Cola',
        image: 'https://pbs.twimg.com/profile_images/493592781575557120/H7R37Fc8_400x400.jpeg',
        description: 'Coca-Cola is a carbonated soft drink sold in stores, restaurants, and vending machines throughout the world. It is produced by The Coca-Cola Company of Atlanta, Georgia, and is often referred to simply as Coke (a registered trademark of The Coca-Cola Company in the United States since March 27, 1944). Originally intended as a patent medicine when it was invented in the late 19th century by John Pemberton, Coca-Cola was bought out by businessman Asa Griggs Candler, whose marketing tactics led Coke to its dominance of the world soft-drink market throughout the 20th century.',
        stock: [
          {
            sku: '987981',
            type: '330ml Bottle',
            price: 1.75,
            left: 136

          },
          {
            sku: '987982',
            type: '500ml Bottle',
            price: 2.00,
            left: 14

          },
          {
            sku: '987983',
            type: '1000ml Bottle',
            price: 3.50,
            left: 200

          },
          {
            sku: '987984',
            type: '2000ml Bottle',
            price: 4.50,
            left: 2

          }
        ]
      }
    ]));
  }

};