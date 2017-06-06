exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('farewells').del()
    .then(function () {
      // Inserts seed entries
      return knex('farewells').insert([
        {id: 1, text: 'See ya later!'},
        {id: 2, text: 'Goodbye'},
        {id: 3, text: 'Peace out yo!'}
      ]);
    });
};
