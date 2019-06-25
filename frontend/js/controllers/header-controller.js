myApp.controller("headerCtrl", function(
  $scope,
  TemplateService,
  NavigationService
) {
  $scope.template = TemplateService;
  $scope.$on("$stateChangeSuccess", function(
    event,
    toState,
    toParams,
    fromState,
    fromParams
  ) {
    $(window).scrollTop(0);
  });
  $.fancybox.close(true);
  var teamSubtitle = [];
  var categorySubtitle = [];
  $scope.adminurl = adminurl;
  // GET Team
  $scope.getTeam = function() {
    $scope.url = "Teamlist/getList";
    $scope.constraints = {};
    NavigationService.apiCall($scope.url, $scope.constraints, function(data) {
      _.each(data.data, function(n) {
        teamSubtitle.push({
          name: n.name,
          classis: "active",
          stateName: "teamdetail",
          id: n._id
        });
      });
    });
  };
  $scope.getTeam();
  // GET  Team END

  // GET Category
  $scope.getCategory = function() {
    $scope.url = "Categorylist/getList";
    $scope.constraints = {};
    NavigationService.apiCall($scope.url, $scope.constraints, function(data) {
      _.each(data.data, function(n) {
        categorySubtitle.push({
          name: n.name,
          classis: "active",
          stateName: "categorydetail",
          id: n._id
        });
      });
    });
  };
  $scope.getCategory();
  // GET  Category END

  if (_.isEmpty(teamSubtitle) && _.isEmpty(categorySubtitle)) {
    $scope.headerMenu = [
      {
        name: "Home",
        classis: "active",
        anchor: "home",
        subnav: []
      },
      {
        name: "About us",
        classis: "active",
        anchor: "auction",
        subnav: teamSubtitle
      },
      {
        name: "Academy",
        classis: "active",
        anchor: "auction",
        subnav: categorySubtitle
      },
      {
        name: "Club",
        classis: "active",
        anchor: "soldplayers",
        subnav: []
      },
      {
        name: "Gallery",
        classis: "active",
        anchor: "sponsor",
        subnav: []
      },
      {
        name: "Master class",
        classis: "active",
        anchor: "about",
        subnav: []
      },
      {
        name: "News & updates",
        classis: "active",
        anchor: "livestats",
        subnav: []
      },
      {
        name: "Contact us",
        classis: "active",
        anchor: "livestats",
        subnav: []
      }
    ];
  }
});
