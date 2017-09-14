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

var app10 = angular.module("app10",[]);
app10.controller("ctr10",function($scope){
	$scope.selectArray = [{name:"Tom",city:"Beijing"},{name:"Mike",city:"Chaozhou"},{name:"John",city:"Shenzhen"}];
	$scope.selectObject = {
		value1:{name:"Tom",city:"Beijing"},
		value2:{name:"Mike",city:"Chaozhou"},
		value3:{name:"John",city:"Shenzhen"}
	};
	$scope.selectedName1 = $scope.selectArray[0];
	$scope.selectedName2 = $scope.selectArray[0];
	$scope.selectedName3 = $scope.selectObject.value1;
});

var app11 = angular.module("app11",[]);
app11.controller("ctr11",function($scope,$http){
	$http.get("../json/tableJson.json").then(function successsCallback(response){
		$scope.tableData = response.data.data;
	},function errorCallback(response){
		console.log("error");	
	});
});

var app12 = angular.module("app12",[]);
app12.controller("ctr12",function($scope){
	$scope.myBool = true;
	$scope.myText = "不允许编辑";
	$scope.myClick=function(){
		$scope.myBool = !$scope.myBool;
		$scope.myText = $scope.myBool?'不允许编辑':'允许编辑';	
	}
});

var app13 = angular.module("app13",[]);
app13.controller("ctr13",function($scope){
	$scope.myRadio = "2";
	$scope.myCheckbox = true;
	$scope.mySelect = ["dog","cat","panda"];
	$scope.selectValue = "panda";
});

var app14 = angular.module("app14",[]);
app14.controller("ctr14",function($scope){
	$scope.myName = "Tian";
	$scope.nameLower = angular.lowercase($scope.myName);
	$scope.nameUpper = angular.uppercase($scope.myName);
	$scope.nameIsString = angular.isString($scope.myName);
	$scope.nameIsNum = angular.isNumber($scope.myName);
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
		angular.bootstrap(document.getElementById("app10"),["app10"]);
		angular.bootstrap(document.getElementById("app11"),["app11"]);
		angular.bootstrap(document.getElementById("app12"),["app12"]);
		angular.bootstrap(document.getElementById("app13"),["app13"]);
		angular.bootstrap(document.getElementById("app14"),["app14"]);
	}
);
