angular.module("root", ['win', 'services', 'ngAnimate'])
    .controller("index", ["$scope", "animals", function($scope, animals) {
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
        var animalPool = [];
        createPool();
        findNewLeftAnimal();
        findNewRightAnimal();
        setLeftAnimal();
        setRightAnimal();

        function Animal(data) {
            this.name = data.name
            this.img = data.img;
            this.baby = data.baby;
            this.streak = 0;
            this.description = data.description;
        };
        function createPool () {
            /*From the animal service, inside there is an animal array of objects*/
            animals.animals.forEach(function(animalData) {
                animalPool.push(new Animal(animalData));
            });
        }
}])

/*Data*/
