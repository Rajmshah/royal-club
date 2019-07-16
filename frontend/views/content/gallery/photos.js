myApp.controller("GalleryPhotosCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $uibModal
) {
  $scope.template = TemplateService.getHTML("content/gallery/photos.html");
  TemplateService.title = "Gallery Photos"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
  $scope.showVar = "Welcome";
});
