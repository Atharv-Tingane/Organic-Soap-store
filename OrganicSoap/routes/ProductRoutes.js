const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getAllCategory,
    getAllTag
} = require('../controllers/productC')

router.get("/", getAllProducts);           
router.get("/:id", getProductById);         
router.post("/create", createProduct);            
router.put("/:id", updateProduct);          
router.delete("/:id", deleteProduct);
router.get("/category/:cat",getAllCategory);
router.get("/tag/:tag", getAllTag)


module.exports = router;