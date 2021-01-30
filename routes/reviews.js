const express = require("express");
const { getReviews, getReview } = require("../controllers/reviews");

const Review = require("../models/Reviews");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");

router.route("/").get(
  advancedResults(Review, {
    path: "bootcamp",
    select: "name description",
  }),
  getReviews
);

router.route("/:id").get(getReview);

module.exports = router;
