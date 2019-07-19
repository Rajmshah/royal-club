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
  adBlock: [
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
  gallery: [
    {
      image: String,
      imageType: {
        type: String,
        enum: ["Image 285 x 300", "Image 570 x 300", "Image 570 x 600"]
      },
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
module.exports = mongoose.model("Homepage", schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
