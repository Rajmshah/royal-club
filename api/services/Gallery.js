var schema = new Schema({
  folderName: {
    type: String
  },
  title: {
    type: String
  },
  mediaLink: {
    type: String
  },
  videoLink: {
    type: String
  },
  mediaType: {
    type: String,
    enum: ["Photo", "Video"]
  },
  eventDate: {
    type: Date
  },
  videoThumbnail: {
    type: String
  },
  order: {
    type: Number
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
module.exports = mongoose.model("Gallery", schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
