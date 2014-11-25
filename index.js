/*globals google*/
var number = require('as-number')
var xtend = require('xtend')
var noop = require('no-op')

function latlng(obj) {
    if (Array.isArray(obj)) 
        return new google.maps.LatLng(obj[0], obj[1]) 
    return obj
}

var sorts = {
    'distance': google.maps.places.RankBy.DISTANCE,
    'prominence': google.maps.places.RankBy.PROMINENCE
}

module.exports = function(opt, cb) {
    if (Array.isArray(opt))
        opt = { location: opt }
    else
        opt = opt||{}
    cb = typeof cb === 'function' ? cb : noop

    var element = opt.element || document.createElement('div')

    if (!opt.location)
        throw new Error('you must specify a location')

    var request = xtend(opt)
    request.location = latlng(request.location) 
    request.types = request.types || ['cafe']
    request.radius = number(request.radius, 500)

    if (typeof request.rankBy === 'string')
        request.rankBy = sorts[request.rankBy]
    if (request.rankBy === google.maps.places.RankBy.DISTANCE)
        request.radius = undefined

    var service = new google.maps.places.PlacesService(element)
    service.nearbySearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK)
            cb(null, results)
        else
            cb('google API error code '+status)
    })
}