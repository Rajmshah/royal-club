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
  }
};
module.exports = _.assign(module.exports, controller);
