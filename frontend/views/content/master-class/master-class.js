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
  var service = NavigationService;

  $scope.masterClass = [];

  $scope.getUpcoming = [];
  $scope.upcomingDetail = {};
  $scope.hasNext = false;
  $scope.hasPrevious = false;
  $scope.next = "";
  $scope.previous = "";

  $scope.getPast = [];
  $scope.pastDetail = {};
  $scope.hasPastNext = false;
  $scope.hasPastPrevious = false;
  $scope.nextPast = "";
  $scope.previousPast = "";

  $scope.searchMasterClass = function() {
    service.searchMasterClass(function(result) {
      if (result.value) {
        if (result.data.results.length > 0) {
          $scope.masterClass = result.data.results;
        } else {
          $scope.masterClass = [];
        }
      } else {
        toastr.error("Something went wrong.");
      }
    });
  };

  $scope.searchMasterClass();

  $scope.searchUpcomingEvent = function() {
    service.searchUpcomingEvent($scope.upcomingDetail, function(result) {
      if (result.value) {
        if (result.data.results.length > 0) {
          $scope.getUpcoming = result.data.results;
          $scope.hasNext = result.data.hasNext;
          $scope.hasPrevious = result.data.hasPrevious;
          $scope.next = result.data.next;
          $scope.previous = result.data.previous;
        } else {
          $scope.getUpcoming = [];
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

  $scope.searchUpcomingEvent();

  $scope.searchPastEvent = function() {
    service.searchPastEvent($scope.newsDetail, function(result) {
      if (result.value) {
        if (result.data.results.length > 0) {
          $scope.getPast = result.data.results;
          $scope.hasPastNext = result.data.hasNext;
          $scope.hasPastPrevious = result.data.hasPrevious;
          $scope.nextPast = result.data.next;
          $scope.previousPast = result.data.previous;
        } else {
          $scope.getPast = [];
          $scope.hasPastNext = false;
          $scope.hasPastPrevious = false;
          $scope.nextPast = "";
          $scope.previousPast = "";
        }
      } else {
        toastr.error("Something went wrong.");
      }
    });
  };

  $scope.searchPastEvent();

  $scope.callNext = function(type) {
    if (type == "past") {
      delete $scope.pastDetail.previous;
      $scope.pastDetail.next = $scope.nextPast;
      $scope.searchPastEvent();
    } else {
      delete $scope.upcomingDetail.previous;
      $scope.upcomingDetail.next = $scope.next;
      $scope.searchUpcomingEvent();
    }
  };

  $scope.callPrevious = function(type) {
    if (type == "past") {
      delete $scope.pastDetail.next;
      $scope.pastDetail.previous = $scope.previousPast;
      $scope.searchPastEvent();
    } else {
      delete $scope.upcomingDetail.next;
      $scope.upcomingDetail.previous = $scope.previous;
      $scope.searchUpcomingEvent();
    }
  };
});
