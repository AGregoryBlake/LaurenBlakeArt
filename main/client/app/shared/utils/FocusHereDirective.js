app.directive('focusHere', function($timeout) {
    return {
        restrict: 'AC',
        link: function(scope, element, attrs) {
            scope.$watch(attrs.focusHere, function(value) {
              if(value === true) { 
                $timeout(function() {
                  element[0].focus();
                });
              }
            });
        }
    };
});