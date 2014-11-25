var coffee = require('../')
var test = require('tape').test

test('gets coffee', function(t) {
    t.plan(1)
    coffee([40.758895,-73.985131], function(err, data) {
        if (err)
            t.fail(err)
        else 
            t.ok(data, 'got some coffee')
    })
})

test('gets coffee and baked goods', function(t) {
    t.plan(1)
    coffee({ 
        location: [40.758895,-73.985131], 
        types: ['cafe', 'bakery']
    }, function(err, data) {
        if (err)
            t.fail(err)
        else 
            t.ok(data, 'got some tasty stuff')
    })
})