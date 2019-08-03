var schema = new Schema({
  eventName: {
    type: String
  },
  eventDate: {
    type: Date
  },
  venue: {
    type: String
  },
  image: {
    type: String
  },
  email: {
    type: String
  },
  mobile: {
    type: String
  },
  description: {
    type: String
  },
  eventStatus: {
    type: String,
    enum: ["Pending", "Completed"],
    default: "Pending"
  },
  status: {
    type: String,
    enum: ["Enable", "Disable"],
    default: "Enable"
  },
  eventGallery: {
    type: Schema.Types.ObjectId,
    ref: "Gallery"
  }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
schema.plugin(MongoPaging.mongoosePlugin);
module.exports = mongoose.model("Event", schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
  searchUpcomingEvent: function(data, callback) {
    var defaultLimit = 2;
    var filter = {
      limit: data.limit ? parseInt(data.limit) : defaultLimit
    };
    filter.paginatedField = "eventDate";
    filter.sortAscending = true;
    if (data.next) {
      filter.next = data.next;
    }
    if (data.previous) {
      filter.previous = data.previous;
    }
    filter.query = {
      eventDate: { $gt: new Date() },
      status: "Enable"
    };
    Event.paginate(filter).then(result => {
      callback(null, result);
    });
  },
  searchPastEvent: function(data, callback) {
    var defaultLimit = 1;
    var filter = {
      limit: data.limit ? parseInt(data.limit) : defaultLimit
    };
    filter.paginatedField = "eventDate";
    if (data.next) {
      filter.next = data.next;
    }
    if (data.previous) {
      filter.previous = data.previous;
    }
    filter.query = {
      eventDate: { $lt: new Date() },
      status: "Enable"
    };
    Event.paginate(filter).then(result => {
      callback(null, result);
    });
  }
};
module.exports = _.assign(module.exports, exports, model);
