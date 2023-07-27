const { request } = require("express");
const express = require("express");
const Query = require("../Schemas/contactSchema");
const router = express.Router();
const { contactValidation } = require("../Schemas/joiValidations");

router.post("/", async (req, res) => {
  try {
    // console.log(
    //   `Data of New Member : ${req.body.firstName} ${req.body.lastName} ${req.body.phoneNumber} ${req.body.email} ${req.body.message}`
    // );
    const { error } = contactValidation(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
    }

    const query = new Query({
      firstname: req.body.firstName,
      lastname: req.body.lastName,
      phone: req.body.phoneNumber,
      message: req.body.message,
      email: req.body.email,
    });
    query.save().then((data) => {
      res.json(data);
    });
  } catch (error) {
    res.json({ message: "error" + error });
  }
});
module.exports = router;
