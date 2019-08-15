module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
  getAlbumsByType: function(req, res) {
    Gallery.getAlbumsByType(req.body, res.callback);
  },

  getAllByAlbumType: function(req, res) {
    Gallery.find({
      mediaType: req.body.mediaType,
      folderName: req.body.folderName
    }).exec(res.callback);
  },

  uploadExcel: function(req, res) {
    if (req.body.file) {
      Config.importGS(req.body.file, function(err, importData) {
        if (err || _.isEmpty(importData)) {
          res.json({
            data: err,
            value: false
          });
        } else {
          Gallery.uploadExcel(importData, res.callback);
        }
      });
    } else {
      res.json({
        data: "File Not Found",
        value: false
      });
    }
  },

  generateSampleExcel: function(req, res) {
    Gallery.generateSampleExcel(req.query, res);
  },

  generateExcel: function(req, res) {
    Gallery.generateExcel(req.query, res);
  }
};
module.exports = _.assign(module.exports, controller);
