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
  var service = NavigationService;

  $scope.getPhotoAlbums = [];
  $scope.getVideoAlbums = [];

  $scope.getPhotoAlbums = function() {
    var photoDetail = {};
    photoDetail.mediaType = "Photo";
    photoDetail.limit = 4;
    service.getAlbumsByType(photoDetail, function(result) {
      if (result.value) {
        if (result.data.results.length > 0) {
          $scope.getPhotoAlbums = result.data.results;
        } else {
          $scope.getPhotoAlbums = [];
        }
      } else {
        toastr.error("Something went wrong.");
      }
    });
  };
  $scope.getPhotoAlbums();

  $scope.getVideoAlbums = function() {
    var videoDetail = {};
    videoDetail.mediaType = "Video";
    videoDetail.limit = 4;
    service.getAlbumsByType(videoDetail, function(result) {
      if (result.value) {
        if (result.data.results.length > 0) {
          $scope.getVideoAlbums = result.data.results;
        } else {
          $scope.getVideoAlbums = [];
        }
      } else {
        toastr.error("Something went wrong.");
      }
    });
  };
  $scope.getVideoAlbums();
});
