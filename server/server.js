require("dotenv").config();

const express = require("express");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Learn React Today" }],
  [2, { priceInCents: 20000, name: "Learn CSS Today" }],
]);

app.post("/create-checkout-session", async (req, res) => {
  console.log(req.body);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      //   line_items: [
      //     {
      //       price_data: {
      //         currency: "usd",
      //         product_data: {
      //           name: "T-shirt",
      //         },
      //         unit_amount: 2000,
      //         tax_behavior: "exclusive",
      //       },
      //       adjustable_quantity: {
      //         enabled: true,
      //         minimum: 1,
      //         maximum: 10,
      //       },
      //       quantity: 1,
      //     },
      //   ],
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 10,
          },
          quantity: 1,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/`,
      cancel_url: `${process.env.CLIENT_URL}/`,
    });
    console.log(session);
    res.json({ url: session.url });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
});

app.listen(8080);
