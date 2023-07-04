const mongoose = require("mongoose");

// Define the schema for the "menus" collection
const menuSchema = new mongoose.Schema({
  id: String,
  brandId: String,
  code: String,
  priority: Number,
  isBaseMenu: Boolean,
  dateFilter: {
    startTime: String,
    endTime: String,
  },
  products: [Object],
  collections: [Object],
  categories: [Object],
  groupProducts: [Object],
  productsInGroup: [Object],
});

// Create a Mongoose model based on the schema
const MenuModel = mongoose.model("Menu", menuSchema);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://vinh1305:thanhvinh2002@cluster0.lkk6qu0.mongodb.net/homie-store",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Fetch data from the "menus" collection
MenuModel.find({})
  .then((data) => {
    // console.log("Menus:", JSON.parse(JSON.stringify(data)));

    // Access the individual menus and their properties
    data.forEach((menu) => {
      console.log("Menu ID:", menu.id);
      console.log("Collections:", menu.collections);
    });

  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
