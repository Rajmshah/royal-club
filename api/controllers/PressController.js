module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
  searchNewsAndUpdates: function(req, res) {
    Press.searchNewsAndUpdates(req.body, res.callback);
  }
};
module.exports = _.assign(module.exports, controller);
