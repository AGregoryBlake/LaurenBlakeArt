// takes a scope property with gallery name, gallery url, and 2 gallery samples (thumbnail imgs)
app.directive('gallerySample', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/shared/gallerySample/gallerySampleView.html'
  };
});