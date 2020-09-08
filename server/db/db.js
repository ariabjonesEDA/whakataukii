
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

module.exports = {
//  call your functions here
}

// Add functions here