
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1,
          title: 'Chicken Noodle Soup',
          description: 'The best homemade chicken noodle shoup.'
        },
        {
          id: 2,
          title: 'Chocolate Cake',
          description: 'To die for.'
        },
        {
          id: 3,
          title: 'Pizza',
          description: 'Can not go wrong with pizza.'
        }
      ]);
    });
};
