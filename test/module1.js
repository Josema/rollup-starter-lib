const test = require('tape')
const { method } = require('../module1')

test('method', t => {
    t.equal(typeof method, 'function')
    t.end()
})
