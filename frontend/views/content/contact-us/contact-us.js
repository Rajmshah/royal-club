myApp.controller("ContactUsCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $uibModal
) {
  $scope.template = TemplateService.getHTML(
    "content/contact-us/contact-us.html"
  );
  TemplateService.title = "Contact Us"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
});
