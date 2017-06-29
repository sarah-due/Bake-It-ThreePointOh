exports.up = function (knex, Promise) {
  return knex.schema.createTable('bakeshops', function (table) {
    table.increments('bakeshop_id').primary()
    table.string('bakeshop_name')
    table.string('bakeshop_logo')
    table.string('bakeshop_img')
    table.string('bakeshop_url')
    table.string('bakeshop_address')
    table.string('bakeshop_hours')
    table.string('bakeshop_info')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('bakeshops')
}
