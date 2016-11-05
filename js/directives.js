var app = angular.module('win', []);

app.directive("win", function() {
  return {
    restrict: "E",
    templateUrl: "win.html",
    controller: 'winner'
  };
});
/*
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
*/
/*
app.directive('fadeIn', function($timeout){
   return function($scope, $element, attr) {
    $scope.$watch(attr, function(nv,ov) {
      console.log(attr.ngSrc);
      if (nv!=ov) {
        console.log('change noticed')
        element.addClass('changed');
        $timeout(function() {
          element.removeClass('changed');
        }, 1000); // Could be enhanced to take duration as a parameter
      }
    });
  };
});
*/

app.directive('fadeIn', function($timeout){
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          element.on("load", function () {
                    element.removeClass("hidey");
                    element.addClass("showy");
            });
          attrs.$observe("ngSrc", function () {
              console.log("change")
                element.removeClass("showy");
                element.addClass("hidey");
            })

        }
    }
})
