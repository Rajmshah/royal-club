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
  var service = NavigationService;

  $scope.homepage = [];
  $scope.banners = [];
  $scope.adBlocks = [];
  $scope.gallery = [];
  $scope.smallImage1 = "img/img-holder/1.jpg";
  $scope.smallImage2 = "img/img-holder/2.jpg";
  $scope.mediumImage = "img/img-holder/570x300.jpg";
  $scope.largeImage = "img/img-holder/570x600.jpg";

  $scope.formData = {};
  $scope.showError = false;
  $scope.showValidationError = false;

  $scope.subscribe = {};
  $scope.showSubscribeError = false;
  $scope.showSubscribeValidationError = false;

  $scope.searchHomepage = function() {
    service.searchHomepage(function(result) {
      if (result.value) {
        if (result.data.results.length > 0) {
          $scope.homepage = result.data.results[0];
          if ($scope.homepage.banner.length > 0) {
            $scope.banners = $scope.homepage.banner;
          } else {
            $scope.banners = [];
          }
          if ($scope.homepage.adBlock.length > 0) {
            $scope.adBlocks = $scope.homepage.adBlock;
          } else {
            $scope.adBlocks = [];
          }
          if ($scope.homepage.gallery.length > 0) {
            $scope.gallery = $scope.homepage.gallery;
            _.each($scope.gallery, function(image) {
              if (image.status == "Enable") {
                switch (image.imageType) {
                  case "Image 285 x 300":
                    if (
                      _.isEmpty($scope.smallImage1) ||
                      $scope.smallImage1.charAt(0) == "i"
                    ) {
                      if (image.image) {
                        $scope.smallImage1 = $filter("uploadpath")(image.image);
                      } else {
                        $scope.smallImage1 = "img/img-holder/1.jpg";
                      }
                    } else {
                      if (image.image) {
                        $scope.smallImage2 = $filter("uploadpath")(image.image);
                      } else {
                        $scope.smallImage2 = "img/img-holder/2.jpg";
                      }
                    }
                    break;
                  case "Image 570 x 300":
                    if (image.image) {
                      $scope.mediumImage = $filter("uploadpath")(image.image);
                    } else {
                      $scope.mediumImage = "img/img-holder/570x300.jpg";
                    }
                    break;
                  case "Image 570 x 600":
                    if (image.image) {
                      $scope.largeImage = $filter("uploadpath")(image.image);
                    } else {
                      $scope.largeImage = "img/img-holder/570x600.jpg";
                    }
                    break;

                  default:
                    break;
                }
              }
            });
          } else {
            $scope.gallery = [];
          }
        } else {
          $scope.homepage = [];
          $scope.banners = [];
          $scope.adBlocks = [];
          $scope.gallery = [];
        }
      } else {
        toastr.error("Something went wrong.");
      }
    });
  };
  $scope.searchHomepage();

  $scope.saveEnquiryForm = function(formDetail) {
    if (
      formDetail.email &&
      formDetail.mobile &&
      formDetail.name &&
      formDetail.query
    ) {
      service.saveEnquiryForm(formDetail, function(result) {
        if (result.value) {
          $scope.showError = false;
          $scope.showValidationError = false;
          toastr.success("Enquiry form submitted.");
          $scope.formData = {};
        } else {
          toastr.error("Something went wrong.");
          $scope.showError = true;
          $scope.showValidationError = false;
        }
      });
    } else {
      toastr.error("Enter valid values in the fields.");
      $scope.showValidationError = true;
      $scope.showError = false;
    }
  };

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
