const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Items collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/restaurant-cms"
);

const menuSeed = [
  {
    name: "Chile con Queso",
    price: 3.99
  },
  {
    name: "Beef Enchiladas",
    desc: "2 Beef Enchiladas topped w/ gravy sauce & melted cheese. Served w/ rice & beans.",
    price: 8.99
  },
  {
    name: "Combinado Plate",
    desc: "Your choice of any 2 meats: beef fajita, pollo asadero, pastor & barbacoa. Served w/ rice & beans, salads",
    price: 9.99
  },
  {
    name: "Enchilada Plate",
    desc: "Served with rice & beans",
    price: 3.99
  },
  {
    name: "House Margarita",
    price: 5.99
  }
];

db.Item.remove({})
  .then(() => db.Item.collection.insertMany(menuSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
