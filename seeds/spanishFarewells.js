
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('spanishFarewells').del()
    .then(function () {
      // Inserts seed entries
      return knex('spanishFarewells').insert([
        {id: 1, text: 'Hasta luego!'},
        {id: 2, text: 'Adios!'},
        {id: 3, text: 'Hasta manana!'}
      ]);
    });
};
