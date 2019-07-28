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
var model = {
  getAlbumsByType: function(data, callback) {
    var pipeline = [
      {
        $match: {
          mediaType: data.mediaType,
          status: "Enable"
        }
      },
      {
        $group: {
          _id: "$folderName",
          folderName: {
            $first: "$folderName"
          },
          title: {
            $first: "$title"
          },
          mediaLink: {
            $first: "$mediaLink"
          },
          mediaType: {
            $first: "$mediaType"
          },
          eventDate: {
            $first: "$eventDate"
          },
          videoThumbnail: {
            $first: "$videoThumbnail"
          },
          order: {
            $first: "$order"
          },
          status: {
            $first: "$status"
          }
        }
      },
      {
        $sort: {
          order: 1
        }
      }
    ];
    var newPipeLine;
    if (data.limit) {
      newPipeLine = _.cloneDeep(pipeline);
      newPipeLine.push({
        $limit: data.limit
      });
    } else {
      newPipeLine = _.cloneDeep(pipeline);
    }
    Gallery.aggregate(newPipeLine).exec(callback);
  }
};
module.exports = _.assign(module.exports, exports, model);
