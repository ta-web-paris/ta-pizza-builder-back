const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pizzaSchema = new Schema(
  {
    tomato: Boolean,
    onion: Boolean,
    pepperoni: Boolean,
    extraCheese: Boolean,
    size: {
      type: String,
      enum: ["small", "medium", "large", "enormous"],
      default: "large"
    },
    price: Number
  },
  { timestamps: true }
);

const Pizza = mongoose.model("Pizza", pizzaSchema);
module.exports = Pizza;
