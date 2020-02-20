const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

// endpoints

// GET all recipes
router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            res.status(404).json({ error: 'We did not find any recipes.' });
        })
});

// GET recipe by recipe id
router.get('/:id', (req, res) => {

    const { id } = req.params;

    Recipes.recipeById(id)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(err => {
            res.status(404).json({ error: 'We did not find that recipe.' });
        })
});

// GET recipe instructions by recipe id
router.get('/details/:id', (req, res) => {

    const { id } = req.params;

    Recipes.getInstructions(id)
        .then(instructions => {
            res.status(200).json(instructions);
        })
        .catch(err => {
            res.status(404).json({ error: 'We did not find those recipe details.' });
        })
});

module.exports = router;