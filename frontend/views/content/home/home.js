myApp.controller("HomeCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $uibModal
) {
  $scope.template = TemplateService.getHTML("content/home/home.html");
  TemplateService.title = "Home"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();

  //   $scope.getHomePage = function() {
  //     $scope.url = "Homepage/search";
  //     $scope.constraints = {};
  //     NavigationService.apiCall($scope.url, $scope.constraints, function(data) {
  //       if (data.value) {
  //         if (data.data.results.length > 0) {
  //           $scope.banners = data.data.results[0].banner;
  //           $scope.medias = data.data.results[0].media;
  //         } else {
  //           $scope.banners = [];
  //           $scope.medias = [];
  //         }
  //       } else {
  //         $scope.banners = [];
  //         $scope.medias = [];
  //       }
  //     });
  //   };
  //   $scope.getHomePage();

  //   $scope.getTeam = function() {
  //     $scope.url = "Teamdetail/getList";
  //     $scope.constraints = {};
  //     NavigationService.apiCall($scope.url, $scope.constraints, function(data) {
  //       if (data.value) {
  //         if (data.data) {
  //           $scope.teams = data.data;
  //         } else {
  //           $scope.teams = [];
  //         }
  //       } else {
  //         $scope.teams = [];
  //       }
  //     });
  //   };
  //   $scope.getTeam();

  //   $scope.getSponsor = function() {
  //     $scope.url = "Sponsor/getlist";
  //     $scope.constraints = {};
  //     NavigationService.apiCall($scope.url, $scope.constraints, function(data) {
  //       if (data.value) {
  //         if (data.data) {
  //           $scope.sponsors = data.data;
  //         } else {
  //           $scope.sponsors = [];
  //         }
  //       } else {
  //         $scope.sponsors = [];
  //       }
  //     });
  //   };
  //   $scope.getSponsor();

  $scope.swiperInit = function() {
    $timeout(function() {
      // BANNER
      var bannerSlide = new Swiper(".banners-img .swiper-container", {
        slidesPerView: 1,
        preloadImages: true,
        speed: 500,
        autoplay: 3000,
        nextButton: ".banners-img .swiper-button-next",
        prevButton: ".banners-img .swiper-button-prev",
        reverseDirection: false,
        paginationClickable: true
        // loop: true,
      });
      var teamSlide = new Swiper(".teams-logo .swiper-container", {
        slidesPerView: 3,
        preloadImages: true,
        speed: 500,
        autoplay: 3000,
        spaceBetween: 10,
        nextButton: ".teams-logo .swiper-button-next",
        prevButton: ".teams-logo .swiper-button-prev",
        reverseDirection: false,
        paginationClickable: true
        // loop: true,
      });
      var sponsorSlide = new Swiper(".sponsors-logo .swiper-container", {
        slidesPerView: 3,
        preloadImages: true,
        speed: 500,
        autoplay: 3000,
        spaceBetween: 10,
        nextButton: ".teams-logo .swiper-button-next",
        prevButton: ".teams-logo .swiper-button-prev",
        reverseDirection: false,
        paginationClickable: true
        // loop: true,
      });
    }, 1000);
  };
  $scope.$on("$viewContentLoaded", function(event) {
    $scope.swiperInit();
  });
});
