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
  $scope.adminurl = adminurl;

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
      anchor: "about-us",
      subnav: []
    },
    {
      name: "Academy",
      classis: "active",
      anchor: "academy",
      subnav: []
    },
    // {
    //   name: "Club",
    //   classis: "active",
    //   anchor: "club",
    //   subnav: []
    // },
    {
      name: "Gallery",
      classis: "active",
      anchor: "gallery",
      subnav: []
    },
    {
      name: "Master class",
      classis: "active",
      anchor: "master-class",
      subnav: []
    },
    {
      name: "News & updates",
      classis: "active",
      anchor: "news-updates",
      subnav: []
    },
    {
      name: "Contact us",
      classis: "active",
      anchor: "contact-us",
      subnav: []
    }
  ];
});
