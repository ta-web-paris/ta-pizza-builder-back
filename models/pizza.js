const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const basePrices = {
  small: 5,
  medium: 8,
  large: 10,
  enormous: 20
}

const ingsPrices = {
  tomato: 2,
  onion: 1,
  pepperoni: 3,
  extraCheese: 2
}


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

pizzaSchema.pre("save", function (next) {
  const basePrice = basePrices[this.size]
  const totalPrice = Object.keys(ingsPrices)
    .filter(key => this[key])
    .reduce((total, current) => ingsPrices[current] + total, basePrice)
  this.price = totalPrice
  next()
})

const Pizza = mongoose.model("Pizza", pizzaSchema);
module.exports = Pizza;
