const express = require("express");
const router = express.Router();
const Subscriber = require("../Schemas/subcribersSchema");

var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gymhutfitness@gmail.com",
    pass: "flourida123",
  },
});

const status = "";

router.post("/:email", async (req, res) => {
  var mailOptions = {
    from: "gymhutfitness@gmail.com",
    to: req.params.email,
    subject: "GymHut Subsription",
    //     text: `You got a new message:
    // You have been subscribed to GymHut and now will be a permenant member for further notifications.`,
    html:
      "<h2>Hey You!</h2><h4>You got a new message:</h4><p>You have been subscribed to GymHut and now will be a permenant member for further notifications.</p><h6>You Well Wishers,</h6><h5>GymHut Team</h5>",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(401).send("Error occured");
    } else {
      status = "success";
    }
  });
  try {
    const subcriber = new Subscriber({
      subscriberId: req.params.email,
    });
    subcriber.save().then((data) => {
      res.json(data);
    });
  } catch (error) {
    // console.log(error);
    res.status(403).send("Error occured");
  }
});
module.exports = router;
