'use strict'

const Schema = use('Schema')

class UsersSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.timestamps()
      table.string('name');
      table.string('surname');
      table.string('email').unique();
      table.string('password',60);
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersSchema
