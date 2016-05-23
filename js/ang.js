angular.module("root", [])
    .controller("leftAnimal", ["$scope", function($scope){
     	var self = this;
    	var animal

       $scope.findAnimal = function () {
       	var randNum = Math.floor(Math.random()*animalPool.length);
       	animal = animalPool[randNum];
       	animalPool.splice(randNum, 1)
       	changeAnimal();
       };
       $scope.findAnimal();

       function changeAnimal(){
       $scope.name = animal.name;
       $scope.img = animal.img;
   		}
    }])
    .controller("rightAnimal", ["$scope", function($scope){
    	var self = this;
    	var animal

       $scope.findAnimal = function () {
       	var randNum = Math.floor(Math.random()*animalPool.length);
       	animal = animalPool[randNum];
       	animalPool.splice(randNum, 1)
       	changeAnimal();
       };
       $scope.findAnimal();

       function changeAnimal(){
       $scope.name = animal.name;
       $scope.img = animal.img;
   		}
    }]);



var Animal = function(data) {
    this.name = data.name
    this.img = data.img;
    this.baby = data.baby;
};

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
	img: "http://i.imgur.com/kzarlKW.jpg",
	baby: true
}];

var animalPool = [];

var init = function(){
	 animals.forEach(function(animalData) {
        animalPool.push(new Animal(animalData));
        });
}
init();