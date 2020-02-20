
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          id: 1,
          name: 'Cheese',
          quantity: 0.5
        },
        {
          id: 2,
          name: 'Chicken',
          quantity: 1
        }
      ]);
    });
};
