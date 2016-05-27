var app = angular.module('win', []);

app.directive("win", function() {
  return {
    restrict: "E",
    templateUrl: "win.html",
    controller: 'winner'
  };
});