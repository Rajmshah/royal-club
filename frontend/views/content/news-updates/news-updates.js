myApp.controller("NewsUpdatesCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $uibModal
) {
  $scope.template = TemplateService.getHTML(
    "content/news-updates/news-updates.html"
  );
  TemplateService.title = "News & Updates"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
  var service = NavigationService;

  $scope.getNews = [];
  $scope.newsDetail = {};
  $scope.hasNext = false;
  $scope.hasPrevious = false;
  $scope.next = "";
  $scope.previous = "";

  $scope.searchNewsAndUpdates = function() {
    service.searchNewsAndUpdates($scope.newsDetail, function(result) {
      if (result.value) {
        if (result.data.results.length > 0) {
          $scope.getNews = result.data.results;
          $scope.hasNext = result.data.hasNext;
          $scope.hasPrevious = result.data.hasPrevious;
          $scope.next = result.data.next;
          $scope.previous = result.data.previous;
        } else {
          $scope.getNews = [];
          $scope.hasNext = false;
          $scope.hasPrevious = false;
          $scope.next = "";
          $scope.previous = "";
        }
      } else {
        toastr.error("Something went wrong.");
      }
    });
  };

  $scope.callNext = function() {
    delete $scope.newsDetail.previous;
    $scope.newsDetail.next = $scope.next;
    window.scrollTo(0, 0);
    $scope.searchNewsAndUpdates();
  };

  $scope.callPrevious = function() {
    delete $scope.newsDetail.next;
    $scope.newsDetail.previous = $scope.previous;
    window.scrollTo(0, 0);
    $scope.searchNewsAndUpdates();
  };

  $scope.searchNewsAndUpdates();
});
