
exports.up = function (knex) {
    return knex.schema.createTable('recipes', tbl => {
        // recipe primary id  
        tbl.increments();

        // recipe title
        tbl.string('title', 255)
            .notNullable();

        // recipe description
        tbl.string('description', 500)
            .notNullable();
    })
        .createTable('ingredients', tbl => {
            // ingredient id
            tbl.increments();

            // ingredient name
            tbl.string('name', 255)
                .notNullable()
                .unique();

            // inrgedient quantity
            tbl.float('quantity')
                .notNullable();
        })
        .createTable('steps', tbl => {
            // step id
            tbl.increments();

            // description
            tbl.string('description', 255)
                .notNullable();

            // step number
            tbl.integer('step_number')
                .notNullable();

            // recipe id - foriegn key
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('recipe_ingredients', tbl => {

            tbl.primary(['recipe_id', 'ingredient_id']);

            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes');

            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
        });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
