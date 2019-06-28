myApp.controller("AboutUsCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $uibModal
) {
  $scope.template = TemplateService.getHTML("content/about-us/about-us.html");
  TemplateService.title = "About Us"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
});
