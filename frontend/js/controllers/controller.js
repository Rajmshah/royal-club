myApp.controller("HomeCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http,
  $uibModal
) {
  $scope.template = TemplateService.getHTML("content/home.html");
  TemplateService.title = "Home"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();

  $scope.getHomePage = function() {
    $scope.url = "Homepage/search";
    $scope.constraints = {};
    NavigationService.apiCall($scope.url, $scope.constraints, function(data) {
      if (data.value) {
        if (data.data.results.length > 0) {
          $scope.banners = data.data.results[0].banner;
          $scope.medias = data.data.results[0].media;
        } else {
          $scope.banners = [];
          $scope.medias = [];
        }
      } else {
        $scope.banners = [];
        $scope.medias = [];
      }
    });
  };
  $scope.getHomePage();

  $scope.getTeam = function() {
    $scope.url = "Teamdetail/getList";
    $scope.constraints = {};
    NavigationService.apiCall($scope.url, $scope.constraints, function(data) {
      if (data.value) {
        if (data.data) {
          $scope.teams = data.data;
        } else {
          $scope.teams = [];
        }
      } else {
        $scope.teams = [];
      }
    });
  };
  $scope.getTeam();

  $scope.getSponsor = function() {
    $scope.url = "Sponsor/getlist";
    $scope.constraints = {};
    NavigationService.apiCall($scope.url, $scope.constraints, function(data) {
      if (data.value) {
        if (data.data) {
          $scope.sponsors = data.data;
        } else {
          $scope.sponsors = [];
        }
      } else {
        $scope.sponsors = [];
      }
    });
  };
  $scope.getSponsor();

  $scope.swiperInit = function() {
    $timeout(function() {
      // BANNER
      var bannerSlide = new Swiper(".banners-img .swiper-container", {
        slidesPerView: 1,
        preloadImages: true,
        speed: 500,
        autoplay: 3000,
        nextButton: ".banners-img .swiper-button-next",
        prevButton: ".banners-img .swiper-button-prev",
        reverseDirection: false,
        paginationClickable: true
        // loop: true,
      });
      var teamSlide = new Swiper(".teams-logo .swiper-container", {
        slidesPerView: 3,
        preloadImages: true,
        speed: 500,
        autoplay: 3000,
        spaceBetween: 10,
        nextButton: ".teams-logo .swiper-button-next",
        prevButton: ".teams-logo .swiper-button-prev",
        reverseDirection: false,
        paginationClickable: true
        // loop: true,
      });
      var sponsorSlide = new Swiper(".sponsors-logo .swiper-container", {
        slidesPerView: 3,
        preloadImages: true,
        speed: 500,
        autoplay: 3000,
        spaceBetween: 10,
        nextButton: ".teams-logo .swiper-button-next",
        prevButton: ".teams-logo .swiper-button-prev",
        reverseDirection: false,
        paginationClickable: true
        // loop: true,
      });
    }, 1000);
  };
  $scope.$on("$viewContentLoaded", function(event) {
    $scope.swiperInit();
  });
});

myApp.controller("LinksCtrl", function(
  $scope,
  TemplateService,
  NavigationService,
  $timeout,
  toastr,
  $http
) {
  $scope.template = TemplateService.getHTML("content/links.html");
  TemplateService.title = "Links"; // This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
});

// Example API Controller
myApp.controller("DemoAPICtrl", function(
  $scope,
  TemplateService,
  apiService,
  NavigationService,
  $timeout
) {
  apiService.getDemo($scope.formData, function(data) {
    // console.log(data);
  });
});

//  $scope.suppliers = [{
//         name: "Casey Slusse",
//         supplier: "Regular Fit Cotton Top",
//         invoice: "#1024587 invoice is Pending",
//         img: 'img/mike.png'
//     }, {
//         name: " Dee Schlatter",
//         supplier: "Regular Fit Cotton Top",
//         invoice: "#1024588 invoice is Pending",
//         img: 'img/mike.png'
//     }, {
//         name: " Byron Mccully",
//         supplier: "Regular Fit Cotton Top",
//         invoice: "#1024589 invoice is Pending",
//         img: 'img/mike.png'
//     }, {
//         name: " Prince Stucky",
//         supplier: "Regular Fit Cotton Top",
//         invoice: "#1024590 invoice is Pending",
//         img: 'img/mike.png'
//     }];

//     $scope.submitForm = function (data) {
//         // console.log("This is it");
//         return new Promise(function (callback) {
//             $timeout(function () {
//                 callback();
//             }, 5000);
//         });
//     };

//     $scope.rate = 7;
//     $scope.max = 10;
//     $scope.isReadonly = false;

//     $scope.hoveringOver = function (value) {
//         $scope.overStar = value;
//         $scope.percent = 100 * (value / $scope.max);
//     };

//     $scope.ratingStates = [{
//             stateOn: 'glyphicon-ok-sign',
//             stateOff: 'glyphicon-ok-circle'
//         },
//         {
//             stateOn: 'glyphicon-star',
//             stateOff: 'glyphicon-star-empty'
//         },
//         {
//             stateOn: 'glyphicon-heart',
//             stateOff: 'glyphicon-ban-circle'
//         },
//         {
//             stateOn: 'glyphicon-heart'
//         },
//         {
//             stateOff: 'glyphicon-off'
//         }
//     ];

//     //modal example
//     $scope.modalOpen = function () {
//         $uibModal.open({
//             animation: true,
//             templateUrl: 'views/content/modal.html',
//             size: 'sm',
//             controller: function ($scope) {
//                 $scope.name = 'bottom';
//             }
//         });
//     };
