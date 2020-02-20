
exports.up = function (knex) {
    return knex.schema.alterTable('recipes', tbl => {
        tbl.integer('ingredients')
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function (knex) {
    return knex.scham.dropTableIfExists('recipes');
};
