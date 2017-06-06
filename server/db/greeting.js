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

const getSpanishFarewells = (db) => {
  console.log('get spanish farewells');
  return db('spanishFarewells')
  .select('*')
}

module.exports = {
  getGreetings,
  getSpanishGreetings,
  getFarewells,
  getSpanishFarewells
}
