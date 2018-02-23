const test = require('tape')
const { method } = require('../module2')

test('method', t => {
    t.equal(typeof method, 'function')
    t.end()
})
