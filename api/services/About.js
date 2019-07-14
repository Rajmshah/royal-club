var schema = new Schema({
  content1: {
    type: String
  },
  content2: {
    type: String
  },
  team: [
    {
      image: String,
      name: String,
      designation: String,
      description: String,
      status: {
        type: String,
        enum: ["Enable", "Disable"],
        default: "Enable"
      }
    }
  ]
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model("About", schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
