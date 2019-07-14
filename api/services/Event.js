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
module.exports = mongoose.model("Event", schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
