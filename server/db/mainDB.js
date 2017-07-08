const getCategories = (db) => {
  return db('categories')
    .select('*')
}

const getRecipes = (db) => {
  return db('recipes')
    .select('*')
}

const addRecipe = (recipe, db) => {
  return db('recipes').insert(recipe)
}

const getRecipeById = (recipeID, db) => {
  return db('recipes')
    .where('recipe_id', recipeID)
    .first()
}

const getBakeShops = (db) => {
  return db('bakeshops')
    .select('*')
}

module.exports = {
  getCategories,
  getRecipes,
  addRecipe,
  getRecipeById,
  getBakeShops
}
