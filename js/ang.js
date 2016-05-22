angular.module("root", [])
    .controller("rightAnimal", ["$scope", function($scope){
       $scope.name = "right";
    }])
    .controller("leftAnimal", ["$scope", function($scope){
       $scope.name = "left";
    }]);


var animals =[{
	name : "Baby Quetzal",
	img: "http://i.imgur.com/CtnEDpM.jpg",
	baby: true
},{
	name : "Baby Otter",
	img: "http://i.imgur.com/1IShHRT.jpg",
	baby: true
},{
	name : "Baby Octopus",
	img: "http://i.imgur.com/kzarlKW.jpg"
	baby: true
}
]