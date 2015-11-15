//TypeScript module 
var app;
(function (app) {
    var productList;
    (function (productList) {
        //Class that implements the Interface above
        var ProductListCtrl = (function () {
            function ProductListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = 'Product List';
                this.showImage = false;
                this.products = [];
                //The dataAccessService contain the product object
                var productResource = dataAccessService.getProductResource();
                productResource.query(function (data) {
                    _this.products = data;
                });
            }
            ProductListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            ProductListCtrl.$inject = ['dataAccessService'];
            return ProductListCtrl;
        })();
        //Registring controller with Angular Module
        angular
            .module('productManagement')
            .controller('ProductListCtrl', ProductListCtrl);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
