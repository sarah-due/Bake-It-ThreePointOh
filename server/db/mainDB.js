const getCategories = (db) => {
  return db('categories')
    .select('*')
}

const getRecipes = (db) => {
  return db('recipes')
    .select('*')
}

module.exports = {
  getCategories,
  getRecipes
}
