const { z } = require('zod');
const { z } = require("zod");

function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      console.log("VALIDATION BODY:", req.body);
      console.log("VALIDATION ERROR:", result.error);

      return res.status(400).json({
        message: "Invalid request body",
        errors: result.error.issues
      });
    }

    req.body = result.data;
    next();
  };
}

module.exports = validate;
