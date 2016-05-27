angular.module("services", [])
	.value("factor", 6)//Creates a value named factor with the value of 6
	.factory("square", ["factor", function (factor) { //create a factory that squares it's injected "factor"
			return factor * factor;
	}]);