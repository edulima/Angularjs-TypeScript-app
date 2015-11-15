//Typescript module
var app;
(function (app) {
    //AngularJs module
    angular.module('productManagement', ['common.services',
        'productResourceMock']);
})(app || (app = {}));
