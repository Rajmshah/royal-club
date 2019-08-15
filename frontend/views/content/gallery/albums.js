myApp.controller("GalleryAlbumsCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $uibModal,
  $state,
  $stateParams
) {
  $scope.template = TemplateService.getHTML("content/gallery/albums.html");
  TemplateService.title = "Gallery Albums"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
  var service = NavigationService;

  $scope.getAlbums = [];

  $scope.getAlbums = function() {
    var albumDetail = {};
    albumDetail.mediaType = $stateParams.mediaType;
    service.getAlbumsByType(albumDetail, function(result) {
      if (result.value) {
        if (result.data.length > 0) {
          $scope.getAlbums = result.data;
        } else {
          $scope.getAlbums = [];
        }
      } else {
        toastr.error("Something went wrong.");
      }
    });
  };

  $scope.getAlbums();
});
