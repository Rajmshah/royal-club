var imgurl = adminurl + "upload/";

var imgpath = imgurl + "readFile";
var uploadurl = imgurl;

myApp.factory("NavigationService", function($http) {
  return {
    getNavigation: function() {
      // return navigation;
    },
    apiCall: function(url, formData, callback) {
      $http.post(adminurl + url, formData).then(function(data) {
        data = data.data;
        callback(data);
      });
    },
    searchHomepage: function(callback) {
      $http.post(adminurl + "Homepage/search").then(function(data) {
        data = data.data;
        callback(data);
      });
    },
    searchAbout: function(callback) {
      $http.post(adminurl + "About/search").then(function(data) {
        data = data.data;
        callback(data);
      });
    },
    searchClub: function(callback) {
      $http.post(adminurl + "Academy/search").then(function(data) {
        data = data.data;
        callback(data);
      });
    },
    searchMasterClass: function(callback) {
      $http.post(adminurl + "MasterClass/search").then(function(data) {
        data = data.data;
        callback(data);
      });
    },
    searchContact: function(callback) {
      $http.post(adminurl + "Contact/search").then(function(data) {
        data = data.data;
        callback(data);
      });
    },
    saveEnquiryForm: function(formData, callback) {
      $http.post(adminurl + "EnquiryForm/save", formData).then(function(data) {
        data = data.data;
        callback(data);
      });
    },
    saveSubscription: function(formData, callback) {
      $http.post(adminurl + "Subscription/save", formData).then(function(data) {
        data = data.data;
        callback(data);
      });
    },
    getBannerByPageName: function(formData, callback) {
      $http
        .post(adminurl + "Banner/getBannerByPageName", formData)
        .then(function(data) {
          data = data.data;
          callback(data);
        });
    },
    getAlbumsByType: function(formData, callback) {
      $http
        .post(adminurl + "Gallery/getAlbumsByType", formData)
        .then(function(data) {
          data = data.data;
          callback(data);
        });
    },
    getAllByAlbumType: function(formData, callback) {
      $http
        .post(adminurl + "Gallery/getAllByAlbumType", formData)
        .then(function(data) {
          data = data.data;
          callback(data);
        });
    },
    searchUpcomingEvent: function(formData, callback) {
      $http
        .post(adminurl + "Event/searchUpcomingEvent", formData)
        .then(function(data) {
          data = data.data;
          callback(data);
        });
    },
    searchPastEvent: function(formData, callback) {
      $http
        .post(adminurl + "Event/searchPastEvent", formData)
        .then(function(data) {
          data = data.data;
          callback(data);
        });
    },
    searchNewsAndUpdates: function(formData, callback) {
      $http
        .post(adminurl + "Press/searchNewsAndUpdates", formData)
        .then(function(data) {
          data = data.data;
          callback(data);
        });
    }
  };
});
