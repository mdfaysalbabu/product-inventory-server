const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Mock Data
let customers = [
  {
    id: 11908,
    name: "Ram",
    email: "jesus_christ@church.com",
    pincode: "Mumbai",
    location_name: "Mumbai, Maharashtra, India",
    type: "C",
    profile_pic: null,
    gst: "",
  },
];

let products = [
  {
    id: 209,
    display_id: 8,
    owner: 1079,
    name: "New Product",
    category: "The god of War",
    characteristics: "New Product Characteristics",
    features: "",
    brand: "New Product Brand",
    sku: [
      {
        id: 248,
        selling_price: 54,
        max_retail_price: 44,
        customer: 11908,
        amount: 33,
        unit: "kg",
        quantity_in_inventory: 0,
        product: 209,
      },
      {
        id: 247,
        selling_price: 32,
        max_retail_price: 32,
        amount: 33,
        unit: "kg",
        quantity_in_inventory: 0,
        product: 209,
      },
      {
        id: 246,
        selling_price: 23,
        max_retail_price: 21,
        amount: 22,
        unit: "kg",
        quantity_in_inventory: 1,
        product: 209,
      },
    ],
    updated_on: "2024-05-24T12:46:41.995873Z",
    adding_date: "2024-05-24T12:46:41.995828Z",
  },
];

let saleOrders = [
  {
    customer_id: 11908,
    items: [
      {
        sku_id: 248,
        price: 12,
        quantity: 12,
      },
    ],
    paid: false,
    invoice_no: "Invoice - 1212121",
    invoice_date: "2024-07-05",
  },
];

// Routes
app.get("/api/customers", (req, res) => {
  res.json(customers);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/saleOrders", (req, res) => {
  res.json(saleOrders);
});

app.post("/api/saleOrders", (req, res) => {
  const newOrder = req.body;
  saleOrders.push(newOrder);
  res.status(201).json(newOrder);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
