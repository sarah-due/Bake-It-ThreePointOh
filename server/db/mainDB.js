const getCategories = (db) => {
  return db('categories')
    .select('*')
}

const getRecipes = (db) => {
  return db('recipes')
    .select('*')
}

const getBakeShops = (db) => {
  return db('bakeshops')
    .select('*')
}

module.exports = {
  getCategories,
  getRecipes,
  getBakeShops
}
