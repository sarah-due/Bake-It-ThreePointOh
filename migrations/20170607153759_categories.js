exports.up = function (knex, Promise) {
  return knex.schema.createTable('categories', function (table) {
    table.increments('category_id').primary()
    table.string('category_name')
    table.string('image_url')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('categories')
}
