var app = angular.module('mainApp', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    console.log($routeProvider.when);
    $routeProvider
    .when('/login',{
        templateUrl: 'views/login.html'
    })
    .when('/home', {
        templateUrl : 'views/home.html'
    })
    .when('/index', {
        templateUrl : 'index.html'
    })
    .otherwise({
        redirectTo: 'index.html'
    })
}]);


app.run(function(){



});

app.controller('Principal', function($scope){
    // $scope.message = "Hola soy un mensaje";
});