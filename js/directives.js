var app = angular.module('win', []);

app.directive("win", function() {
  return {
    restrict: "E",
    templateUrl: "win.html",
    controller: 'winner'
  };
});
app.directive('fadeIn', function($timeout){
    return {
        restrict: 'A',
        link: function($scope, $element, attrs){
            $element.addClass("ng-hide-remove");
            $element.on('load', function() {
                $element.addClass("ng-hide-add");
            });
        }
    };
})