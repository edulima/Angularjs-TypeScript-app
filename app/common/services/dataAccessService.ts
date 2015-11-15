module app.common {
	
	interface IDataAccessService{
		getProductResource(): ng.resource.IResourceClass<IProductResource>;		
	}
	
	//IProduct interface extends the IResource interface from the angular module
	//Passing a generic parameter
	interface IProductResource 
		extends ng.resource.IResource<app.domain.IProduct> {
	}
	
	
	export class DataAccessService implements IDataAccessService{
		
		//$inject must not be a property of the class not an instance of the class hence 
		//the use of Static key word STATIC
		static $inject = ['$resource'];
		//(private) allow ts to create a private property resource 
		constructor(private $resource: ng.resource.IResourceService){
			
		}
		
		getProductResource(): ng.resource.IResourceClass<IProductResource>{
			return this.$resource('/api/products/:productId');
		}
	}
	
	//Register the service 
	angular.module('common.services')
	.service('dataAccessService', DataAccessService);
	
	
}