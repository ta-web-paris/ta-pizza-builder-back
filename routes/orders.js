const express = require("express");
const router = express.Router();
const Pizza = require("../models/pizza")

function calculatePrice(ings) {

}

router.post("/order", (req, res, next) => {
  const { tomato, onion, pepperoni, extraCheese, size } = req.body
  const price = calculatePrice()
  Pizza.create({ tomato, onion, pepperoni, extraCheese, size })
    .then(newPizza => res.send(newPizza))
    .catch(next)
});

router.get('/order/:id', (req, res, next) => {
  Pizza.findById(req.params.id)
    .then(pizza => res.send(pizza))
    .catch(next)
})

module.exports = router;
