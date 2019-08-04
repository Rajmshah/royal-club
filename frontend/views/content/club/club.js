myApp.controller("ClubCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $uibModal
) {
  $scope.template = TemplateService.getHTML("content/club/club.html");
  TemplateService.title = "Club"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
  var service = NavigationService;
  $scope.club = [];
  $scope.banners = [];
  $scope.staffs = [];
  $scope.showStaff = false;
  $scope.showBanner = false;

  $scope.searchClub = function() {
    service.searchClub(function(result) {
      if (result.value) {
        if (result.data.results.length > 0) {
          $scope.club = result.data.results[0];
          if ($scope.club.banner.length > 0) {
            $scope.banners = $scope.club.banner;
            $scope.tempBanner = _.filter($scope.club.banner, function(o) {
              if (o.status == "Enable") {
                return o;
              }
            });
            if ($scope.tempBanner.length <= 0) {
              $scope.showBanner = false;
            } else {
              $scope.showBanner = true;
            }
          } else {
            $scope.showBanner = false;
            $scope.banners = [];
          }
          if ($scope.club.staff.length > 0) {
            $scope.staffs = $scope.club.staff;
            $scope.temp = _.filter($scope.club.staff, function(o) {
              if (o.status == "Enable") {
                return o;
              }
            });
            if ($scope.temp.length <= 0) {
              $scope.showStaff = false;
            } else {
              $scope.showStaff = true;
            }
          } else {
            $scope.showStaff = false;
            $scope.staffs = [];
          }
        } else {
          $scope.showStaff = false;
          $scope.showBanner = false;
          $scope.club = [];
          $scope.banners = [];
          $scope.staffs = [];
        }
      } else {
        toastr.error("Something went wrong.");
      }
    });
  };
  $scope.searchClub();

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
