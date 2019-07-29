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
  var service = NavigationService;
  $scope.academy = [];
  $scope.banners = [];
  $scope.staffs = [];

  $scope.searchAcademy = function() {
    service.searchAcademy(function(result) {
      if (result.value) {
        if (result.data.results.length > 0) {
          $scope.academy = result.data.results[0];
          if ($scope.academy.banner.length > 0) {
            $scope.banners = $scope.academy.banner;
          } else {
            $scope.banners = [];
          }
          if ($scope.academy.staff.length > 0) {
            $scope.staffs = $scope.academy.staff;
          } else {
            $scope.staffs = [];
          }
        } else {
          $scope.academy = [];
          $scope.banners = [];
          $scope.staffs = [];
        }
      } else {
        toastr.error("Something went wrong.");
      }
    });
  };
  $scope.searchAcademy();

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

  // JSON FILE
  //   {
  //     "name": "Event Gallery",
  //     "type": "selectFromTable",
  //     "tableRef": "eventGallery",
  //     "searchApi": "searchCall",
  //     "placeholder": "Enter Event Gallery",
  //     "id": "eventGallery",
  //     "url": "Gallery/search"
  //   }
  //   {
  //     "name": "Event Gallery",
  //     "type": "selectFromTable",
  //     "tableRef": "eventGallery",
  //     "searchApi": "searchCall",
  //     "placeholder": "Enter Event Gallery",
  //     "id": "eventGallery",
  //     "url": "Gallery/search"
  //   }
});
