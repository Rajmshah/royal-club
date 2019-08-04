myApp.controller("GalleryCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $filter,
  $stateParams,
  $state,
  $uibModal
) {
  $scope.template = TemplateService.getHTML("content/gallery/gallery.html");
  TemplateService.title = "Gallery"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
  var service = NavigationService;

  $scope.getPhotoAlbums = [];
  $scope.getVideoAlbums = [];

  $scope.homepage = [];
  $scope.gallery = [];
  $scope.smallImage1 = "img/img-holder/1.jpg";
  $scope.smallImage2 = "img/img-holder/2.jpg";
  $scope.mediumImage = "img/img-holder/570x300.jpg";
  $scope.largeImage = "img/img-holder/570x600.jpg";

  $scope.searchHomepage = function() {
    service.searchHomepage(function(result) {
      if (result.value) {
        if (result.data.results.length > 0) {
          $scope.homepage = result.data.results[0];
          if ($scope.homepage.gallery.length > 0) {
            $scope.gallery = $scope.homepage.gallery;
            _.each($scope.gallery, function(image) {
              if (image.status == "Enable") {
                switch (image.imageType) {
                  case "Image 285 x 300":
                    if (
                      _.isEmpty($scope.smallImage1) ||
                      $scope.smallImage1.charAt(0) == "i"
                    ) {
                      if (image.image) {
                        $scope.smallImage1 = $filter("uploadpath")(image.image);
                      } else {
                        $scope.smallImage1 = "img/1.jpg";
                      }
                    } else {
                      if (image.image) {
                        $scope.smallImage2 = $filter("uploadpath")(image.image);
                      } else {
                        $scope.smallImage2 = "img/2g.png";
                      }
                    }
                    break;
                  case "Image 570 x 300":
                    if (image.image) {
                      $scope.mediumImage = $filter("uploadpath")(image.image);
                    } else {
                      $scope.mediumImage = "img/3.jpg";
                    }
                    break;
                  case "Image 570 x 600":
                    if (image.image) {
                      $scope.largeImage = $filter("uploadpath")(image.image);
                    } else {
                      $scope.largeImage = "img/4.jpg";
                    }
                    break;

                  default:
                    break;
                }
              }
            });
          } else {
            $scope.gallery = [];
          }
        } else {
          $scope.homepage = [];
          $scope.gallery = [];
        }
      } else {
        toastr.error("Something went wrong.");
      }
    });
  };
  $scope.searchHomepage();

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
