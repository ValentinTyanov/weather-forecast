weatherApp.config(($routeProvider, $sceDelegateProvider) => {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://api.openweathermap.org/**'
    ]);
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })

    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
});