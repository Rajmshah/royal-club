var schema = new Schema({
  image: String,
  title: String,
  type: {
    type: String,
    enum: [
      "Club",
      "Master Class",
      "Academy",
      "News & Update",
      "Gallery",
      "About Us",
      "Contact Us"
    ]
  },
  status: {
    type: String,
    enum: ["Enable", "Disable"]
  },
  linkType: {
    type: String,
    enum: ["Internal", "External"]
  },
  link: String
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model("Banner", schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
