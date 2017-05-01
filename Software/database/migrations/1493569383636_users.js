'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.timestamps()
      table.string('username').unique()
      table.string('email').unique()
      table.string('password', 60)
      table.softDeletes()
	 })
	}

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
