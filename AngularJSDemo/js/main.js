// JavaScript Document
var app2 = angular.module("app2",[]);
app2.controller("ctr2",function($scope){
		$scope.firstName = "jack";
		$scope.lastName = "ma";
});

var app3 = angular.module("app3",[]);
app3.controller("ctr3",function($scope){
	$scope.nameArray=["John","Tony","Sally"];
});

var app4 = angular.module("app4",[]);
app4.directive("runoobDirective",function(){
	return {
		template:"<p>自定义指令!</p>"	
	};
});

var app5 = angular.module("app5",[]);
app5.controller("ctr5",function($scope){
	$scope.myEmail = "m18825070504";
});

var app6 = angular.module("app6",[]);
app6.controller("ctr6-1",function($scope,$rootScope){
	$scope.num = 111;
	$rootScope.rootNum = 1234;
});
app6.controller("ctr6-2",function($scope){
	$scope.num = 222;
});

angular.element(document).ready(
	function(){
		angular.bootstrap(document.getElementById("app2"),["app2"]);
		angular.bootstrap(document.getElementById("app3"),["app3"]);
		angular.bootstrap(document.getElementById("app4"),["app4"]);
		angular.bootstrap(document.getElementById("app5"),["app5"]);
		angular.bootstrap(document.getElementById("app6"),["app6"]);
	}
);
