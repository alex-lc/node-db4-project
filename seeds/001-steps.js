
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          id: 1,
          description: 'Boil water.',
          step_number: 1,
          recipe_id: 1
        },
        {
          id: 2,
          description: 'Cook the chicken in a pan.',
          step_number: 2,
          recipe_id: 1
        },
        {
          id: 3,
          description: 'Throw that chicken in the boiling water with some noodles.',
          step_number: 3,
          recipe_id: 1
        },
        {
          id: 4,
          description: 'Kneed the dough for the pizza.',
          step_number: 1,
          recipe_id: 2
        },
        {
          id: 5,
          description: 'Roll the dough out.',
          step_number: 2,
          recipe_id: 2
        }
      ]);
    });
};
