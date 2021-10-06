weatherApp.service('cityService', function() {
    this.city = 'London';
});

weatherApp.service('forecastService', ['$resource', function($resource) {
    this.GetWeather = (city) => {
        const weatherAPI =
        $resource('https://api.openweathermap.org/data/2.5/weather?appid=67f561dcd3789242509ce3aff26ca396',
            {get: {method: "JSONP"}});

        return weatherAPI.get({ q: city });
    }
}]);