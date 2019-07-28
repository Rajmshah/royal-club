module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
  searchUpcomingEvent: function(req, res) {
    Event.searchUpcomingEvent(req.body, res.callback);
  },
  searchPastEvent: function(req, res) {
    Event.searchPastEvent(req.body, res.callback);
  }
};
module.exports = _.assign(module.exports, controller);
