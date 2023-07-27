const express = require("express");
const Products = require("../Schemas/productSchema");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51HndUcEynMwgZp7ZkpUr5Gn8XVucBYgvZqt7CBgSfU7HXBsIpfP3WfwQBDWHpIFASzfHNHqyigvoAi6g4ZL7ebAm00m85IKY3n"
);
const uuid = require("uuid");

const updateProduct = async (productsData, product, index, email) => {
  try {
    const member = await Products.updateOne(
      { name: product },
      {
        $push: {
          buyers: {
            email: email,
            quanity: productsData.quantity[index],
            total: productsData.price[index],
          },
        },
      }
    );
  } catch (error) {
    console.log("error", error);
  }
};

router.get("/allProducts", async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Products.find().limit(12);
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/pricey", async (req, res) => {
  try {
    const products = await Products.find().sort({
      price: -1,
    });
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/cheapest", async (req, res) => {
  try {
    const products = await Products.find().sort({
      price: 0,
    });
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:name", async (req, res) => {
  try {
    const product = await Products.find({ name: req.params.name });
    res.json(product);
  } catch (error) {
    res.send(401).send(error);
  }
});

router.put("/productCustomers", async (req, res) => {
  try {
    const { productsData, email } = req.body;
    let member;
    // console.log("products data", productsData);
    productsData.products.map((product, index) =>
      updateProduct(productsData, product, index, email)
    );
    res.status(200).send("Updatation Completed");
  } catch (error) {
    console.log(`error is : ${error}`);
    res.status(401).send(error);
  }
});

router.post("/productPayment", async (req, res) => {
  try {
    const { token, totalPrice } = req.body;
    // console.log(token);
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const idempotency_key = uuid.v4();

    const charge = await stripe.charges.create(
      {
        amount: totalPrice * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${totalPrice}$ prodcucts from Gym Accesories`,
      },
      {
        idempotency_key,
      }
    );
    status = "success";
    res.json({ status: status });
  } catch (error) {
    status = "failure";
    console.log(`error is in stripe payment : ${error}`);
    res.json({ status: status });
  }
});

module.exports = router;
