myApp.controller("footerCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $uibModal
) {
  $scope.template = TemplateService;
  var service = NavigationService;

  $scope.subscribe = {};
  $scope.showSubscribeError = false;
  $scope.showSubscribeValidationError = false;

  $scope.saveSubscription = function(subscribe) {
    if (subscribe.email) {
      service.saveSubscription(subscribe, function(result) {
        if (result.value) {
          $scope.showSubscribeError = false;
          $scope.showSubscribeValidationError = false;
          $scope.subscribe = {};
          toastr.success("Subscription received successfully.");
        } else {
          toastr.error("Something went wrong.");
          $scope.showSubscribeError = true;
          $scope.showSubscribeValidationError = false;
        }
      });
    } else {
      toastr.error("Enter valid value in the field.");
      $scope.subscribe = {};
      $scope.showSubscribeValidationError = true;
      $scope.showSubscribeError = false;
    }
  };
});
