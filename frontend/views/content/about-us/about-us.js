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
  var service = NavigationService;
  $scope.about = [];
  $scope.teams = [];
  $scope.showTeam = false;

  $scope.searchAbout = function() {
    service.searchAbout(function(result) {
      if (result.value) {
        if (result.data.results.length > 0) {
          $scope.about = result.data.results[0];
          if ($scope.about.team.length > 0) {
            $scope.teams = $scope.about.team;
            $scope.temp = _.filter($scope.about.team, function(o) {
              if (o.status == "Enable") {
                return o;
              }
            });
            if ($scope.temp.length <= 0) {
              $scope.showTeam = false;
            } else {
              $scope.showTeam = true;
            }
          } else {
            $scope.showTeam = false;
            $scope.teams = [];
          }
        } else {
          $scope.showTeam = false;
          $scope.about = [];
          $scope.teams = [];
        }
      } else {
        toastr.error("Something went wrong.");
      }
    });
  };
  $scope.searchAbout();
});
