myApp.controller("GalleryAlbumsCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $uibModal
) {
  $scope.template = TemplateService.getHTML("content/gallery/albums.html");
  TemplateService.title = "Gallery Albums"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
  $scope.showVar = "Welcome";
});
