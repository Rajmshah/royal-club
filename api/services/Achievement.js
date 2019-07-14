var schema = new Schema({
  image: {
    type: String
  },
  title: {
    type: String
  },
  date: {
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
module.exports = mongoose.model("Achievement", schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
