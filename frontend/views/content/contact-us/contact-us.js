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
  var service = NavigationService;

  $scope.contact = [];
  $scope.formData = {};
  $scope.showError = false;
  $scope.showValidationError = false;

  $scope.searchContact = function() {
    service.searchContact(function(result) {
      if (result.value) {
        if (result.data.results.length > 0) {
          $scope.contact = result.data.results[0];
        } else {
          $scope.contact = [];
        }
      } else {
        toastr.error("Something went wrong.");
      }
    });
  };
  $scope.searchContact();

  $scope.saveEnquiryForm = function(formDetail, formValid) {
    if (formValid.$valid) {
      service.saveEnquiryForm(formDetail, function(result) {
        if (result.value) {
          $scope.showError = false;
          $scope.showValidationError = false;
          toastr.success("Enquiry form submitted.");
          $scope.formData = {};
        } else {
          toastr.error("Something went wrong.");
          $scope.showError = true;
        }
      });
    } else {
      toastr.error("Enter valid values in the fields.");
      $scope.showValidationError = true;
    }
  };
});
