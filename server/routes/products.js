import express from "express";
import prodSchema from "../models/productModel.js";
const router = express.Router();

router.post("/product/lsdkefm", (req, res) => {
    const product = prodSchema(req.body)
    product.save()
        .then((data) => { res.json(data) })
        .catch((error) => { res.json({ message: error }) })
})
router.get("/product", (req, res) => {
    prodSchema.find()
        .then((products) => {
            res.json(products);
        })
        .catch((err) => console.log(err));
})
export default router