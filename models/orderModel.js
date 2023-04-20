const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Order name required!"],
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
    },
    userid: {
      type: String,
    },
    orderItems: [],
    shippingAddress: {
      type: Object,
    },
    orderAmount: {
      type: String,
    },
    isDeliverd: {
      type: Boolean,
      default: false,
    },
    transectionId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
