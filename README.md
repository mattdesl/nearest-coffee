# nearest-coffee

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Client-side Google Places search for coffee shops near the given Lat/Lng. 

```js
var coffee = require('nearest-coffee')
coffee({ 
    location: [40.758895, -73.985131], 
    radius: 1000
}, function(err, data) {
    if (err) 
        throw err

    var places = data.map(function(d) {
        return d.name
    })

    console.log(places)
})
```

Assumes `google` is already a global, e.g. via:

```html
<script src="https://maps.googleapis.com/maps/api/js?libraries=places"></script>
```

PRs for Node version welcome.

## Usage

[![NPM](https://nodei.co/npm/nearest-coffee.png)](https://nodei.co/npm/nearest-coffee/)

#### `coffee(opt[, callback])`

If `opt` is an array, it's assumed to be a simple `[lat, lng]`. Otherwise you can pass any options [for the Places API](https://developers.google.com/maps/documentation/javascript/places#place_search_requests), including:

- `radius` in meters, defaults to 500. max is 50,000 m
- `location` a Google Map, LatLng object, or simple `[lat, lng]` array`
- `keyword` a term to match
- `name` a name to match
- `rankBy` can be `'prominence'` (default) or `'distance'` (will ignore `radius`)
- `types` which defaults to `['cafe']`
- `element` the Map, or a DOM element that receives attributions (required per Terms of Service)

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/nearest-coffee/blob/master/LICENSE.md) for details.
