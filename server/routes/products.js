import express from "express";
import prodSchema from "../models/product_model.js";
const router = express.Router();

router.post("/product", (req, res) => {
    const product = prodSchema(req.body)
    product.save()
        .then((data) => { res.json(data) })
        .catch((error) => { res.json({ message: error }) })
})
export default router