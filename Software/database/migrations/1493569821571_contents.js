'use strict'

const Schema = use('Schema')

class ContentsTableSchema extends Schema {

  up () {
    this.table('contents', (table) => {
      // alter contents table
    })
  }

  down () {
    this.table('contents', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = ContentsTableSchema
