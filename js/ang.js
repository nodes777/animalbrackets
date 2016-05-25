angular.module("root", [])
    .controller("leftAnimal", ["$scope", function($scope){
     	var self = this;
    	var animal

       $scope.findNewAnimal = function () {
       	var randNum = Math.floor(Math.random()*animalPool.length);
       	animal = animalPool[randNum];
       	animalPool.splice(randNum, 1)
       	changeAnimal();
       };
       $scope.findNewAnimal();

       function changeAnimal(){
       	$scope.name = animal.name;
       	$scope.img = animal.img;
   		}
    }])
    .controller("rightAnimal", ["$scope", function($scope){
    	var self = this;
    	var animal

       $scope.findNewAnimal = function () {
       	var randNum = Math.floor(Math.random()*animalPool.length);
       	animal = animalPool[randNum];
       	animalPool.splice(randNum, 1)
       	changeAnimal();
       };
       $scope.findNewAnimal();

       function changeAnimal(){
       	$scope.name = animal.name;
       	$scope.img = animal.img;
   		}
    }])



var Animal = function(data) {
    this.name = data.name
    this.img = data.img;
    this.baby = data.baby;
    this.streak = 0;
    this.description = data.description;
};

var animals =[{
	name : "Baby Quetzal",
	img: "http://i.imgur.com/CtnEDpM.jpg",
	baby: true,
	description: ""
},{
	name : "Baby Otter",
	img: "http://i.imgur.com/1IShHRT.jpg",
	baby: true,
	description: ""
},{
	name : "Baby Octopus",
	img: "http://i.imgur.com/kzarlKW.jpg",
	baby: true,
	description: ""
},{
	name : "Manta Ray",
	img: "http://i.imgur.com/GhiH0Ih.jpg",
	baby: false,
	description: ""
},{
	name : "Platypus",
	img: "http://i.imgur.com/FrnR8Dc.jpg",
	baby: false,
	description: ""
},{
	name : "Baby Turtle",
	img: "http://i.imgur.com/WNPJrla.jpg",
	baby: true,
	description: ""
},{
	name : "Baby Penguin",
	img: "http://i.imgur.com/79d1OcB.jpg",
	baby: true,
	description: ""
}
];

var animalPool = [];

var init = function(){
	 animals.forEach(function(animalData) {
        animalPool.push(new Animal(animalData));
        });
}
init();