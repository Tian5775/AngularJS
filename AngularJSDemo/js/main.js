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

var app15 = angular.module("app15",[]);
app15.controller("ctr15",function($scope){
	$scope.num = 111;
	$scope.myArray = ["dog","cat","panda"];
});

var app16 = angular.module("app16",["ngAnimate"]);
app16.controller("ctr16",function($scope){
	$scope.hideDiv = false;
	$scope.buttonText = "隐藏";
	$scope.showOrHide = function(){
		$scope.hideDiv = !$scope.hideDiv;
		if($scope.hideDiv)
			$scope.buttonText = "显示";
		else
			$scope.buttonText = "隐藏";
	}
});

var app17 = angular.module("app17",[]);
app17.controller("ctr17-1",function($scope,myMath,defaultValue){
	$scope.myNum = defaultValue;
	$scope.square = myMath.multiply($scope.myNum);
	$scope.squareFunc = function(){
		$scope.square = myMath.multiply($scope.myNum);
	}
});
app17.value("defaultValue",5);
app17.factory("MathService",function(){
	var factory = {};
	
	factory.multiply = function(a,b){
		return a * b;	
	}
	
	return factory;
});
app17.service('myMath',function(MathService){
	this.multiply = function(a){
		return 	MathService.multiply(a,a);
	}
});
app17.controller("ctr17-2",function($scope,defaultConstant,myMath2){
	$scope.myNum = defaultConstant;
	$scope.square = myMath2.multiply($scope.myNum);
	$scope.squareFunc = function(){
		$scope.square = myMath2.multiply($scope.myNum);
	}
});
app17.constant("defaultConstant",6);
app17.config(function($provide){
	$provide.provider("MathProvide",function(){
		this.$get = function(){
			var provide = {};
			
			provide.multiply = function(a,b){
				return a * b;	
			}
			
			return provide;
		};		
	});
});
app17.service("myMath2",function(MathProvide){
	this.multiply = function(a){
		return MathProvide.multiply(a,a);
	};
});

var app18 = angular.module("app18",["ngRoute"]);
app18.config(function($routeProvider){
	$routeProvider.
	when('/home',{
		templateUrl:'views/AppDemo18-home.html',
		controller:'ctr1'
	}).
	when('/about',{
		templateUrl:'views/AppDemo18-about.html',
		controller:'ctr2'
	}).
	otherwise({
		redirectTo:'/home'
	});
});
app18.controller("ctr1",function($scope,$route){
	$scope.$route = $route;
}).controller("ctr2",function($scope,$route){
	$scope.$route = $route;
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
		angular.bootstrap(document.getElementById("app15"),["app15"]);
		angular.bootstrap(document.getElementById("app16"),["app16"]);
		angular.bootstrap(document.getElementById("app17"),["app17"]);
		angular.bootstrap(document.getElementById("app18"),["app18"]);
	}
);
