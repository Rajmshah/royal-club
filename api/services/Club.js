var schema = new Schema({
  clubInfo: [
    {
      name: {
        type: String
      },
      content: String
    }
  ],
  team: [
    {
      image: String,
      name: String,
      heading: { type: String, default: "Brand Ambassador" },
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
module.exports = mongoose.model("Club", schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
