myApp.controller("MasterClassCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $uibModal
) {
  $scope.template = TemplateService.getHTML(
    "content/master-class/master-class.html"
  );
  TemplateService.title = "Master Class"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
  var service = NavigationService;
  $scope.masterClass = [];

  $scope.searchMasterClass = function() {
    service.searchMasterClass(function(result) {
      if (result.value) {
        if (result.data.results.length > 0) {
          $scope.masterClass = result.data.results;
        } else {
          $scope.masterClass = [];
        }
      } else {
        toastr.error("Something went wrong.");
      }
    });
  };
  $scope.searchMasterClass();
});
