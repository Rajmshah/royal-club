myApp.controller("AboutTableCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  $state,
  crudService,
  $stateParams
) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("about/table");
  $scope.menutitle = NavigationService.makeactive("About");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  // CODE START
  // VAR
  $scope.formData = {};
  $scope.formData.page = 1;
  $scope.formData.type = "";
  $scope.formData.keyword = "";

  // SEARCHTABLE
  $scope.searchInTable = function(data) {
    $scope.formData.page = 1;
    if (data.length >= 2) {
      $scope.formData.keyword = data;
      $scope.viewTable();
    } else if (data.length == "") {
      $scope.formData.keyword = data;
      $scope.viewTable();
    }
  };

  // VIEW TABLE
  $scope.viewTable = function() {
    $scope.url = "About/search";
    $scope.formData.page = $scope.formData.page++;
    NavigationService.apiCall($scope.url, $scope.formData, function(data) {
      // console.log("data.value", data);
      $scope.items = data.data.results;
      $scope.totalItems = data.data.total;
      $scope.maxRow = data.data.options.count;
    });
  };
  $scope.viewTable();
  // VIEW TABLE

  // DELETE
  $scope.crudService = crudService;
  var url = "About/delete";
  $scope.confirmDelete = function(data) {
    crudService.confirmDelete(data, url, $scope);
  };
  // DELETE END
  // CODE END
});
myApp.controller("AboutDetailsCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  $state,
  crudService,
  $stateParams
) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("about/detail");
  $scope.menutitle = NavigationService.makeactive("About");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  // VARIABLES
  var url = "About";
  $scope.formData = {};
  // VARIABLES END

  // GALLERY ADD
  $scope.add = function(formData, type) {
    if (!formData.team) {
      formData.team = [];
    }
    if (!formData) {
      if (type === "team") {
        $scope.formData.team.push({
          image: "",
          name: "",
          description: "",
          designation: "",
          status: "Enable"
        });
      }
    } else {
      if (type === "team") {
        formData.team.push({
          image: "",
          name: "",
          description: "",
          designation: "",
          status: "Enable"
        });
      }
    }
  };
  // GALLERY  END

  //  DELETE
  $scope.deleteAdded = function(index, type) {
    $scope.formData[type].splice(index, 1);
  };
  //  DELETE END

  // SAVE FUNCTION

  var state = "about";
  $scope.saveData = function(data) {
    crudService.saveData(data, url, state);
  };
  // SAVE BUTTON END
  // console.log("$stateParams.id", $stateParams.id);
  if ($stateParams.id) {
    $scope.title = "Edit";
    var id = $stateParams.id;
    crudService.getOneData(url, id, function(data) {
      if (data) {
        // console.log(data, "edit")
        $scope.formData = data;
      }
    });
  } else {
    $scope.formData.team = [];
  }
});
