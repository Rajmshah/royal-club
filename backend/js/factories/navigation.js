var imgurl = adminurl + "upload/";

var imgpath = imgurl + "readFile";
var uploadurl = imgurl;

myApp.factory("NavigationService", function($http) {
  var navigation = [
    {
      name: "Home Page",
      classis: "activeColor",
      sref: "#!/homepage",
      icon: "phone"
    },
    {
      name: "Banner",
      classis: "activeColor",
      sref: "#!/page/viewBanner//",
      icon: "phone"
    },
    {
      name: "Enquiry Form",
      classis: "activeColor",
      sref: "#!/page/viewEnquiryForm//",
      icon: "phone"
    },
    {
      name: "Subscription",
      classis: "activeColor",
      sref: "#!/page/viewSubscription//",
      icon: "phone"
    },
    {
      name: "Master Class",
      classis: "activeColor",
      sref: "#!/page/viewMasterClass//",
      icon: "phone"
    },
    {
      name: "Press",
      classis: "activeColor",
      sref: "#!/page/viewPress//",
      icon: "phone"
    },
    {
      name: "Achievement",
      classis: "activeColor",
      sref: "#!/page/viewAchievement//",
      icon: "phone"
    },
    {
      name: "Contact Us",
      classis: "activeColor",
      sref: "#!/page/viewContactUs//",
      icon: "phone"
    }
  ];

  return {
    getnav: function() {
      return navigation;
    },

    parseAccessToken: function(data, callback) {
      if (data) {
        $.jStorage.set("accessToken", data);
        callback();
      }
    },
    removeAccessToken: function(data, callback) {
      $.jStorage.flush();
    },
    profile: function(callback, errorCallback) {
      var data = {
        accessToken: $.jStorage.get("accessToken")
      };
      $http.post(adminurl + "user/profile", data).then(function(data) {
        data = data.data;
        if (data.value === true) {
          $.jStorage.set("profile", data.data);
          callback();
        } else {
          errorCallback(data.error);
        }
      });
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

    search: function(url, formData, i, callback) {
      $http.post(adminurl + url, formData).then(function(data) {
        data = data.data;
        callback(data, i);
      });
    },
    delete: function(url, formData, callback) {
      $http.post(adminurl + url, formData).then(function(data) {
        data = data.data;
        callback(data);
      });
    },
    countrySave: function(formData, callback) {
      $http.post(adminurl + "country/save", formData).then(function(data) {
        data = data.data;
        callback(data);
      });
    },

    apiCall: function(url, formData, callback) {
      $http.post(adminurl + url, formData).then(function(data) {
        data = data.data;
        callback(data);
      });
    },

    apiCallWOParam: function(url, callback) {
      $http.post(adminurl + url).then(function(data) {
        data = data.data;
        callback(data);
      });
    },

    searchCall: function(url, formData, i, callback) {
      $http.post(adminurl + url, formData).then(function(data) {
        data = data.data;
        callback(data, i);
      });
    },

    getOneCountry: function(id, callback) {
      $http
        .post(adminurl + "country/getOne", {
          _id: id
        })
        .then(function(data) {
          data = data.data;
          callback(data);
        });
    },
    getLatLng: function(address, i, callback) {
      $http({
        url:
          "https://maps.googleapis.com/maps/api/geocode/json?address=" +
          address +
          "&key=AIzaSyC62zlixVsjaq4zDaL4cefNCubjCgxkte4",
        method: "GET",
        withCredentials: false
      }).then(function(data) {
        data = data.data;
        callback(data, i);
      });
    },
    // uploadExcel: function (form, callback) {
    //     $http.post(adminurl + form.model + '/import', {
    //         file: form.file
    //     }).then(function (data) {
    //         data = data.data;
    //         callback(data);
    //     });
    // },
    uploadExcel: function(url, form, callback) {
      $http.post(adminurl + url, form).then(function(data) {
        data = data.data;
        callback(data);
      });
    },
    generateCategoryDetailExcel: function(url, callback) {
      $http.post(adminurl + url).then(function(data) {
        // data = data.data;
        callback(data);
      });
    }
  };
});
