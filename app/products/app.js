//Typescript module
var app;
(function (app) {
    //AngularJs module
    var main = angular.module('productManagement', ['ngRoute', 'common.services',
        'productResourceMock']);
    main.config(routeConfig);
    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProviver) {
        $routeProviver
            .when('/productList', {
            templateUrl: '/app/products/productListView.html',
            controller: 'ProductListCtrl as vm'
        })
            .when('/productDetail/:productId', {
            templateUrl: '/app/products/productDetailView.html',
            controller: 'ProductDetailCtrl as vm'
        })
            .otherwise('/productList');
    }
})(app || (app = {}));
