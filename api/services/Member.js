var schema = new Schema({
  firstName: {
    type: String
  },
  middleName: {
    type: String
  },
  surname: {
    type: String
  },
  mobile: {
    type: String
  },
  email: {
    type: String
  },
  dob: {
    type: Date
  },
  age: {
    type: String
  },
  status: {
    type: String,
    enum: ["Pending", "Verified"],
    default: "Pending"
  },
  paymentMode: {
    type: String,
    enum: ["Cash", "Online"]
  },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Paid"]
  },
  parentDetail: Schema.Types.Mixed,
  address: String,
  bloodGroup: String,
  photograph: String,
  remark: String,
  amount: String
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model("Member", schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
