angular.module("root", [])
    .controller("rightAnimal", ["$scope", function($scope){
    	var self = this;
    	var name;
    	var animalImage;

       function newAnimal() {
       	var randNum = Math.floor(Math.random()*animalPool.length);
       	var animal = animalPool[randNum];
       	animalImage = animal.img;
       	name = animal.name;
       	animalPool.slice(randNum);
       };
       newAnimal();

       $scope.name = name;
       $scope.img = animalImage;
    }])
    .controller("leftAnimal", ["$scope", function($scope){
     	var self = this;
    	var name;
    	var animalImage;

       function newAnimal() {
       	var randNum = Math.floor(Math.random()*animalPool.length);
       	var animal = animalPool[randNum];
       	animalImage = animal.img;
       	name = animal.name;
       	animalPool.slice(randNum);
       };
       newAnimal();

       $scope.name = name;
       $scope.img = animalImage;
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
console.log(animalPool);