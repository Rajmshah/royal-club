var schema = new Schema({
  banner: [
    {
      image: String,
      title: String,
      linkType: {
        type: String,
        enum: ["Internal", "External"]
      },
      link: String,
      status: {
        type: String,
        enum: ["Enable", "Disable"],
        default: "Enable"
      }
    }
  ],
  content1: {
    type: String
  },
  content2: {
    type: String
  },
  staff: [
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
module.exports = mongoose.model("Academy", schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
