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

var app7 = angular.module("app7",[]);
app7.controller("ctr7",function($scope){
	$scope.firstName = "JACK";
	$scope.lastName = "tom";
	$scope.money = 250;
	$scope.num = 1112.3456;
	$scope.date = 1490161945000;
	$scope.myArray1 = [5,3,6,1,8];
	$scope.myArray2 = [
		{name:"Tom",city:"Beijing"},
		{name:"Jack",city:"Chaozhou"},
		{name:"Rose",city:"HongKong"}
	];
});
app7.filter("reverse",function(){
	return function(text){
		return text.split("").reverse().join("");	
	}
});

var app8 = angular.module("app8",[]);
app8.controller("ctr8",function($scope,$location,$timeout,$interval,hexafy){
	$scope.myUrl = $location.absUrl();
	$scope.timeoutNum = "hi";
	$timeout(function(){
		$scope.timeoutNum = "hello";	
	},2000);
	$scope.intervalNum = 0;
	var thisInterval = $interval(function(){
		if($scope.intervalNum < 10){
			$scope.intervalNum ++ ;			
		}else{
			$interval.cancel(thisInterval);//清除定时器
		}
	},1000);
	$scope.hex = hexafy.myFunc(255);
	$scope.formatNum = 20;
});
app8.service('hexafy',function(){
	this.myFunc = function(x){
		return x.toString(16);
	}
});
//在过滤器中使用自定义服务
app8.filter('myFormat',['hexafy',function(hexafy){
	return function(x){
		return hexafy.myFunc(x);
	}
}]);

var app9 = angular.module("app9",[]);
app9.controller("ctr9",function($scope,$http){
	//需要在服务器中调试
	$http({
		method:"get",
		url:"../json/sites.json"	
	}).then(function successCallback(response){
		$scope.myArray = response.data.sites;
	},function errorCallback(response){
		console.log(response);
	});
	/*$http.get("../json/sites.json").then(function(response){
		$scope.myArray = response.data.sites;
	});*/
});

angular.element(document).ready(
	function(){
		angular.bootstrap(document.getElementById("app2"),["app2"]);
		angular.bootstrap(document.getElementById("app3"),["app3"]);
		angular.bootstrap(document.getElementById("app4"),["app4"]);
		angular.bootstrap(document.getElementById("app5"),["app5"]);
		angular.bootstrap(document.getElementById("app6"),["app6"]);
		angular.bootstrap(document.getElementById("app7"),["app7"]);
		angular.bootstrap(document.getElementById("app8"),["app8"]);
		angular.bootstrap(document.getElementById("app9"),["app9"]);
	}
);
