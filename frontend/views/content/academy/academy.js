myApp.controller("AcademyCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $uibModal
) {
  $scope.template = TemplateService.getHTML("content/academy/academy.html");
  TemplateService.title = "Academy"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
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
    }, 1000);
  };
  $scope.$on("$viewContentLoaded", function(event) {
    $scope.swiperInit();
  });
});
