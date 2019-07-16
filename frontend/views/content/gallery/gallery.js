myApp.controller("GalleryCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $uibModal
) {
  $scope.template = TemplateService.getHTML("content/gallery/gallery.html");
  TemplateService.title = "Gallery"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
  $scope.showVar = "Welcome";
});
