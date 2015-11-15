//Typescript module
module app {
	//AngularJs module
	angular.module('productManagement', 
						[ 'common.services', 
						  'productResourceMock']);
	
	// main.config(routeConfig);
	
	// routeConfig.$inject = ['$routeProvider'];
	// function routeConfig($routeProviver: ng.route.IRouteProvider): void {
		
	// 	$routeProviver
	// 		.when('/productList',
	// 			{
	// 				templateUrl: '/app/products/productListView.html',
	// 				controller: 'ProductListCtrl as vm'
	// 			})
	// 		.when('/productDetail/:productId',
	// 			{
	// 				templateUrl: '/app/products/productDetailView.html',
	// 				controller: 'ProductDetailCtrl as vm'
	// 			})
	// 		.otherwise('/productList');
	// 	}			  
}
 