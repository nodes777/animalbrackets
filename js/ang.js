angular.module("root", [])
    .controller("animals", ["$scope", function($scope) {
        var self = this;
        var lAnimal;
        var rAnimal;

        var findNewLeftAnimal = function() {
            /*Get First Animal*/
            var randNum = Math.floor(Math.random() * animalPool.length);
            lAnimal = animalPool[randNum];
            animalPool.splice(randNum, 1)
        };

        var findNewRightAnimal = function() {
            var randNum = Math.floor(Math.random() * animalPool.length);
            rAnimal = animalPool[randNum];
            animalPool.splice(randNum, 1)
        };

        function setLeftAnimal() {
            $scope.lName = lAnimal.name;
            $scope.lImg = lAnimal.img;
        }

        function setRightAnimal() {
            $scope.rName = rAnimal.name;
            $scope.rImg = rAnimal.img;
        }

        $scope.changeLeftAnimal = function() {
            findNewLeftAnimal();
            setLeftAnimal();
        }
        $scope.changeRightAnimal = function() {
            findNewRightAnimal();
            setRightAnimal();
        }

        /*init*/
        findNewLeftAnimal();
        findNewRightAnimal();
        setLeftAnimal();
        setRightAnimal();

    }])

/*Data*/
var Animal = function(data) {
    this.name = data.name
    this.img = data.img;
    this.baby = data.baby;
    this.streak = 0;
    this.description = data.description;
};

var animals = [{
    name: "Baby Quetzal",
    img: "http://i.imgur.com/CtnEDpM.jpg",
    baby: true,
    description: ""
}, {
    name: "Baby Otter",
    img: "http://i.imgur.com/1IShHRT.jpg",
    baby: true,
    description: ""
}, {
    name: "Baby Octopus",
    img: "http://i.imgur.com/kzarlKW.jpg",
    baby: true,
    description: ""
}, {
    name: "Platypus",
    img: "http://i.imgur.com/FrnR8Dc.jpg",
    baby: false,
    description: ""
}, {
    name: "Baby Turtle",
    img: "http://i.imgur.com/WNPJrla.jpg",
    baby: true,
    description: ""
}, {
    name: "Baby Penguin",
    img: "http://i.imgur.com/79d1OcB.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Elephant",
    img: "http://imgur.com/XzdpuYe.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Kangaroo",
    img: "http://imgur.com/w9odD6T.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Jaguar",
    img: "http://imgur.com/M4rEKNJ.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Panda",
    img: "http://imgur.com/GSDKvtF.jpg",
    baby: true,
    description: ""
}];

var animalPool = [];

var createPool = function() {
    animals.forEach(function(animalData) {
        animalPool.push(new Animal(animalData));
    });
}
createPool();