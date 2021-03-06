myApp.controller("ContactUsCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $uibModal,
  $sce
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
          $scope.map = $sce.trustAsResourceUrl($scope.contact.mapLink);
        } else {
          $scope.contact = [];
        }
      } else {
        toastr.error("Something went wrong.");
      }
    });
  };
  $scope.searchContact();

  $scope.saveEnquiryForm = function(formDetail) {
    if (
      formDetail.email &&
      formDetail.mobile &&
      formDetail.name &&
      formDetail.query
    ) {
      service.saveEnquiryForm(formDetail, function(result) {
        if (result.value) {
          $scope.showError = false;
          $scope.showValidationError = false;
          toastr.success(
            "Thank you for filling the enquiry form, we will get back to you shortly."
          );
          $scope.formData = {};
        } else {
          toastr.error("Something went wrong.");
          $scope.showError = true;
          $scope.showValidationError = false;
        }
      });
    } else {
      toastr.error("Enter valid values in the fields.");
      $scope.showValidationError = true;
      $scope.showError = false;
    }
  };
});
