app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      templateUrl: "app/components/home/homeView.html"
    })
    .when('/store/:id', {
      controller: 'ProductController',
      templateUrl: 'app/components/product/productView.html'
    })
    .when('/gallery/illustration', {
        controller: "GalleryController",
        templateUrl: "app/components/gallery/galleryView.html"
    })
    .when('/gallery/fine-art', {
        controller: "GalleryController",
        templateUrl: "app/components/gallery/galleryView.html"
        	})
    .when('/gallery/concept-art', {
        controller: "GalleryController",
        templateUrl: "app/components/gallery/galleryView.html"
    })
    .when('/store', {
        controller: "StoreController",
        templateUrl: "app/components/store/storeView.html"
    })
    .when('/about', {
            controller: "AboutController",
            templateUrl: "app/components/about/aboutView.html"
    })
    .when('/contact', {
            controller: "ContactController",
            templateUrl: "app/components/contact/contactView.html"
    })
    .otherwise({
      redirectTo: '/'
    });
});