const express = require("express");
const Courses = require("../Schemas/coursesSchema");
const router = express.Router();
const Members = require("../Schemas/membershipSchema");
const stripe = require("stripe")(
  "sk_test_51HndUcEynMwgZp7ZkpUr5Gn8XVucBYgvZqt7CBgSfU7HXBsIpfP3WfwQBDWHpIFASzfHNHqyigvoAi6g4ZL7ebAm00m85IKY3n"
);
const uuid = require("uuid");

router.get("/", async (req, res) => {
  try {
    const posts = await Courses.find().limit(9);
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/AllCourses", async (req, res) => {
  try {
    const posts = await Courses.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/popular", async (req, res) => {
  try {
    const posts = await Courses.find()
      .sort({
        students: -1,
      })
      .limit(3);
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:category", async (req, res) => {
  try {
    const courses = await Courses.find({ category: req.params.category });
    res.json(courses);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/enrollment", async (req, res) => {
  let error;
  let status;
  try {
    const { course, coursePrice, token } = req.body;
    // console.log(`${course} \n ${coursePrice} \n ${token}`);
    const member = await Members.find({
      email: token.email.toLowerCase(),
      enrolled_in: course,
    });
    if (Object.entries(member).length === 0) {
      const customer = await stripe.customers.create({
        email: token.email.toLowerCase(),
        source: token.id,
      });

      const idempotency_key = uuid.v4();
      const charge = await stripe.charges.create(
        {
          amount: coursePrice,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the ${course} course`,
        },
        {
          idempotency_key,
        }
      );

      await Members.updateOne(
        { email: token.email.toLowerCase() },
        { $push: { enrolled_in: course } }
      );

      await Courses.updateOne({ name: course }, { $inc: { students: 1 } });
      status = "success";
      res.json({ status: status });
    } else {
      res.status(401).send("You are Already enrolled in this course ");
    }
  } catch (error) {
    status = "failure";
    console.log("error : ", error);
    res.json({ status: status });
  }
});

router.post("/", async (req, res) => {
  const course = new Courses({
    name: req.body.name,
    category: req.body.category,
    mentor: req.body.mentor,
    duration: req.body.duration,
    calories: req.body.calories,
    intensity: req.body.intensity,
    timings: req.body.timings,
    hours: req.body.hours,
    days: req.body.days,
    shift: req.body.shift,
    students: req.body.students,
    price: req.body.price,
    endingDate: new Date().setDate(new Date().getDate() + req.body.duration),
  });
  course
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});
module.exports = router;
