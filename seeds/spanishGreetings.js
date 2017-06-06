
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('spanishGreetings').del()
    .then(function () {
      // Inserts seed entries
      return knex('spanishGreetings').insert([
        {id: 1, text: 'Hola!'},
        {id: 2, text: 'Buenos Dias!'},
        {id: 3, text: 'Que pasa?'}
      ]);
    });
};
