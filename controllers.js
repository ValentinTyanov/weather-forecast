weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });

    $scope.submit = function() {
        $location.path('/forecast');
    }
}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', 'forecastService', function($scope, cityService, forecastService) {
    $scope.city = cityService.city;
    $scope.weatherResult = forecastService.GetWeather($scope.city);
        $scope.tempInCelsius = (degInKelvin) => {
        return Math.round(degInKelvin - 273.15);
    }
}]);