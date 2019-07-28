var schema = new Schema({
  image: {
    type: String
  },
  title: {
    type: String
  },
  newsDate: {
    type: Date
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ["Enable", "Disable"],
    default: "Enable"
  }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
schema.plugin(MongoPaging.mongoosePlugin);
module.exports = mongoose.model("Press", schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
  searchNewsAndUpdates: function(data, callback) {
    var defaultLimit = 3;
    var filter = {
      limit: data.limit ? parseInt(data.limit) : defaultLimit
    };
    filter.paginatedField = "newsDate";
    if (data.next) {
      filter.next = data.next;
    }
    if (data.previous) {
      filter.previous = data.previous;
    }
    Event.paginate(filter).then(result => {
      callback(null, result);
    });
  }
};
module.exports = _.assign(module.exports, exports, model);
