angular.module("root", ['win', 'services'])
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
            $scope.lStreak = lAnimal.streak;
        }

        function setRightAnimal() {
            $scope.rName = rAnimal.name;
            $scope.rImg = rAnimal.img;
            $scope.rStreak = rAnimal.streak;
        }

        $scope.changeLeftAnimal = function() {
            findNewLeftAnimal();
            setLeftAnimal();
            $scope.rStreak++;
        }
        $scope.changeRightAnimal = function() {
            findNewRightAnimal();
            setRightAnimal();
            $scope.lStreak++;
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
},{
    name: "Baby Pangolin",
    img: "http://imgur.com/lOhSAI7.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Tapir",
    img: "http://imgur.com/LHlrxeA.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Bongo",
    img: "http://imgur.com/NMrYj7b.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Okapi",
    img: "http://imgur.com/LqC45dY.jpg",
    baby: true,
    description: ""
},{
    name: "Baby Pig",
    img: "http://imgur.com/sZa0ses.jpg",
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