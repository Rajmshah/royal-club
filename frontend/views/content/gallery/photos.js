myApp.controller("GalleryPhotosCtrl", function(
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
  $scope.template = TemplateService.getHTML("content/gallery/photos.html");
  TemplateService.title = "Gallery Photos"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
  var service = NavigationService;

  $scope.getGallery = [];

  $scope.getGallery = function() {
    var galleryDetail = {};
    galleryDetail.mediaType = $stateParams.mediaType;
    galleryDetail.folderName = $stateParams.folderName;
    service.getAllByAlbumType(galleryDetail, function(result) {
      if (result.value) {
        if (result.data.results.length > 0) {
          $scope.getGallery = result.data.results;
        } else {
          $scope.getGallery = [];
        }
      } else {
        toastr.error("Something went wrong.");
      }
    });
  };

  $scope.getGallery();
});
