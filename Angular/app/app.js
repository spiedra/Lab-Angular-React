var app = angular.module('mainApp', ['ngRoute', 'menu', 'boton']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log($routeProvider.when);
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html'
        })
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/index', {
            templateUrl: 'index.html'
        })
        .otherwise({
            redirectTo: 'index.html'
        })
}]);


app.run(function () {



});


app.controller('Principal', function ($scope) {
    var lista = this;
    var id = 1;
    lista.productos = [];

    lista.agregarProducto = function () {
        if ($scope.nombre != null
            && $scope.precio != null) {
            lista.productos.push(
                {
                    id: id
                    , nombre: $scope.nombre
                    , precio: $scope.precio
                }
            );
            $scope.nombre = "";
            $scope.precio = "";
            id++;
        }
    }

    lista.eliminarProducto = function(event){
        var id = event.target.attributes.data.value;
        console.log("i -> "+id);
        console.log("Antes "+JSON.stringify(lista.productos));

        lista.productos = lista.productos.filter(
            elemento => {
                return elemento.id != id;
            }
        );
        console.log("Después "+JSON.stringify(lista.productos));
    }
});