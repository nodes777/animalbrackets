var app = angular.module('win', []);

app.directive("win", function() {
  return {
    restrict: "E",
    templateUrl: "win.html",
    controller: 'winner'
  };
});
app.directive('animateOnChange', function($timeout) {
  return function(scope, element, attr) {
    scope.$watch(attr.animateOnChange, function(nv,ov) {
      if (nv!=ov) {
        element.addClass('changed');
        $timeout(function() {
          element.removeClass('changed');
        }, 1000); // Could be enhanced to take duration as a parameter
      }
    });
  };
});