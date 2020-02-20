const db = require('../data/db-config');

module.exports = {
    getRecipes,
    recipeById,
    getInstructions
};

// GET all recipes
function getRecipes() {
    return db('recipes');
}

// GET recipe by id
function recipeById(id) {
    return db('recipes')
        .where({ id })
        .first();
}

// GET list of recipe instructions by recipe id
function getInstructions(id) {
    return db('recipes as r')
        .join('steps as st', 'st.recipe_id', 'r.id')
        .select('st.step_number', 'st.description')
        .where('r.id', id);
}