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
});
