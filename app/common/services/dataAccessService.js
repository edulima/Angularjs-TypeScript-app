var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            //(private) allow ts to create a private property resource 
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getProductResource = function () {
                return this.$resource('/api/products/:productId');
            };
            //$inject must not be a property of the class not an instance of the class hence 
            //the use of Static key word STATIC
            DataAccessService.$inject = ['$resource'];
            return DataAccessService;
        })();
        common.DataAccessService = DataAccessService;
        //Register the service 
        angular.module('common.services')
            .service('dataAccessService', DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
