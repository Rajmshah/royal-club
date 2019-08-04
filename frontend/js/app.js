// Link all the JS Docs here
var myApp = angular.module("myApp", [
  "ui.router",
  "pascalprecht.translate",
  "angulartics",
  "angulartics.google.analytics",
  "ui.bootstrap",
  "ngAnimate",
  "ngSanitize",
  "ui.select",
  "angularPromiseButtons",
  "toastr",
  "ui.swiper"
]);

// Define all the routes below
myApp.config(function(
  $stateProvider,
  $urlRouterProvider,
  $httpProvider,
  $locationProvider
) {
  var templateURL = "views/template/template.html"; //Default Template URL

  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: templateURL,
      controller: "HomeCtrl"
    })
    .state("about-us", {
      url: "/about-us",
      templateUrl: templateURL,
      controller: "AboutUsCtrl"
    })
    .state("club", {
      url: "/club",
      templateUrl: templateURL,
      controller: "ClubCtrl"
    })
    // .state("club", {
    //   url: "/club",
    //   templateUrl: templateURL,
    //   controller: "ClubCtrl"
    // })
    .state("gallery", {
      url: "/gallery",
      templateUrl: templateURL,
      controller: "GalleryCtrl"
    })
    .state("gallery-albums", {
      url: "/gallery/:mediaType",
      templateUrl: templateURL,
      controller: "GalleryAlbumsCtrl"
    })
    .state("gallery-photos", {
      url: "/gallery/:mediaType/:folderName",
      templateUrl: templateURL,
      controller: "GalleryPhotosCtrl"
    })
    .state("master-class", {
      url: "/master-class",
      templateUrl: templateURL,
      controller: "MasterClassCtrl"
    })
    .state("news-updates", {
      url: "/news-updates",
      templateUrl: templateURL,
      controller: "NewsUpdatesCtrl"
    })
    .state("contact-us", {
      url: "/contact-us",
      templateUrl: templateURL,
      controller: "ContactUsCtrl"
    });
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function($translateProvider) {
  $translateProvider.translations("en", LanguageEnglish);
  $translateProvider.translations("hi", LanguageHindi);
  $translateProvider.preferredLanguage("en");
});
