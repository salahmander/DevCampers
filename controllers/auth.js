const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const User = require("../models/User");

// @desc  Get Register user
// @route GET /api/auth/register
// @access Public

exports.register = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});
