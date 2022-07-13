//Angular Custom Module
var myApp = angular.module('myModule', []);

//Angular Custom Controller
myApp.controller('myCtrl', function($scope){
	$scope.msg = 'Hello Angular';
	$scope.alamin = 'img/alamin.jpg';
	$scope.employees = [
					{name:'somon', position:'executive', salary:35000, status:1},
					{name:'rakib', position:'Sr. Executive', salary:45000, status:2},
					{name:'rony', position:'Sr. Executive', salary:50000, status:3},
					{name:'rony', position:'Manager', salary:50000, status:1},
					{name:'emon', position:'executive', salary:30000, status:2},
					{name:'masud', position:'executive', salary:35000, status:3}
				];
	// example for nested ng-repead
	var countryes = [
						{
							name:'bangladesh',
							cityes: [{name:'Dhaka'},{name:'cumilla'}]
						},
						{
							name:'UK',
							cityes: [{name:'uk city1'},{name:'uk city2'}]
						}
					];
	$scope.countryes = countryes;
});
// custom filter for capitalize word
myApp.filter('capitalize', function() {
    return function(input) {
      return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : input;
    }
}); 
//Custom Filter for Status
myApp.filter('status', function(){
	return function(status){
		if(status==1){
			return "Paid";
		} 
		if (status == 2){
			return "Unpaid";
		}
		if(status == 3){
			return "Deducted";
		}
	};

});