function parseProductForm(req, res, next) {
  try {
    if (req.body.weight) {
      req.body.weight = JSON.parse(req.body.weight);
    }

    if (req.body.benefits) {
      req.body.benefits = JSON.parse(req.body.benefits);
    }

    if (req.body.ingredients) {
      req.body.ingredients = JSON.parse(req.body.ingredients);
    }

    if (req.body.tags) {
      req.body.tags = JSON.parse(req.body.tags);
    }

    if (req.body.isActive !== undefined) {
      req.body.isActive = req.body.isActive === "true";
    }

    next();
  } catch (error) {
    return res.status(400).json({
      message: "Invalid product form data"
    });
  }
}

module.exports = parseProductForm;