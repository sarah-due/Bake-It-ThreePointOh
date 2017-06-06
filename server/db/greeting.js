const getGreetings = (db) => {
  return db('greetings')
    .select('*')
}

const getSpanishGreetings = (db) => {
  return db('spanishGreetings')
    .select('*')
}

module.exports = {
  getGreetings,
  getSpanishGreetings
}
