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
});
