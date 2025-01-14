const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  Admin.findOne({
    username: username,
  }).then((admin) => {
    if (admin) {
      res.json({
        message: "Admin already exists",
      });
    } else {
      Admin.create({
        username: username,
        password: password,
      });
      res.json({
        message: "Admin created successfully",
      });
    }
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const image = req.body.image;

  const newCourse = await Course.create({
    title: title,
    description: description,
    price: price,
    image: image,
  });

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  
  res.json({ courses: response });
});

module.exports = router;
