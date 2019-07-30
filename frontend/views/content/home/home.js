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
  $scope.banner = [];
  $scope.adBlocks = [];
  $scope.gallery = [];

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
            $scope.banner = $scope.homepage.banner;
          } else {
            $scope.banner = [];
          }
          if ($scope.homepage.adBlock.length > 0) {
            $scope.adBlocks = $scope.homepage.adBlock;
          } else {
            $scope.adBlocks = [];
          }
          if ($scope.homepage.gallery.length > 0) {
            $scope.gallery = $scope.homepage.gallery;
          } else {
            $scope.gallery = [];
          }
        } else {
          $scope.homepage = [];
          $scope.banner = [];
          $scope.adBlocks = [];
          $scope.gallery = [];
        }
      } else {
        toastr.error("Something went wrong.");
      }
    });
  };
  $scope.searchHomepage();

  $scope.saveEnquiryForm = function(formDetail, formValid) {
    if (formValid.$valid) {
      service.saveEnquiryForm(formDetail, function(result) {
        if (result.value) {
          $scope.showError = false;
          $scope.showValidationError = false;
          toastr.success("Enquiry form submitted.");
          $scope.formData = {};
        } else {
          toastr.error("Something went wrong.");
          $scope.showError = true;
        }
      });
    } else {
      toastr.error("Enter valid values in the fields.");
      $scope.showValidationError = true;
    }
  };

  $scope.saveSubscription = function(subscribe, subscribeValid) {
    if (subscribeValid.$valid) {
      service.saveSubscription(subscribe, function(result) {
        if (result.value) {
          $scope.showSubscribeError = false;
          $scope.showSubscribeValidationError = false;
          $scope.subscribe = {};
          toastr.success("Subscription received successfully.");
        } else {
          toastr.error("Something went wrong.");
          $scope.showSubscribeError = true;
        }
      });
    } else {
      toastr.error("Enter valid value in the field.");
      $scope.subscribe = {};
      $scope.showSubscribeValidationError = true;
    }
  };
});
