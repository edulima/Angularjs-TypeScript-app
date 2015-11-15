//TypeScript module 
module app.productList{

//Inteface 
interface IProductListModel{
	title: string;
	showImage: boolean;
	products: app.domain.IProduct[];
	//create a function/method
	toggleImage(): void; 
}

//Class that implements the Interface above
class ProductListCtrl implements IProductListModel {
	
	//properties of the interface that must be used
	title: string;
	showImage: boolean;
	products: app.domain.IProduct[];
	
	static $inject = ['dataAccessService'];
	constructor(private dataAccessService: app.common.DataAccessService) {
		this.title = 'Product List';
		this.showImage = false;
		this.products = [];
	
		//The dataAccessService contain the product object
		var productResource = dataAccessService.getProductResource();
		productResource.query((data: app.domain.IProduct[]) => {
			this.products = data;
		});
	}			
		toggleImage(): void {
			this.showImage = !this.showImage;
		}
}

//Registring controller with Angular Module
angular
	.module('productManagement')
	.controller('ProductListCtrl', ProductListCtrl);
}
