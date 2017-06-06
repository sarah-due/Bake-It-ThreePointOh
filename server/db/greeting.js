const getGreetings = (db) => {
  return db('greetings')
    .select('*')
}

const getSpanishGreetings = (db) => {
  return db('spanishGreetings')
    .select('*')
}

const getFarewells = (db) => {
  return db('farewells')
  .select('*')
}

module.exports = {
  getGreetings,
  getSpanishGreetings,
  getFarewells
}
