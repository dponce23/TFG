import express from "express";
import prodSchema from "../models/productModel.js";
const router = express.Router();

router.post("/product/addProd", (req, res) => {

    const product = prodSchema(req.body)
    product.save()
        .then((data) => { res.json(data) })
        .catch((error) => { res.json({ message: error }) })
})
router.get("/product/getProds", async (req, res) => {
    const products = await prodSchema.find();
    res.json(products);
})
router.get("/product/:id", (req, res) => {
    const { id } = req.params;
    prodSchema
        .find({ _idProd: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.delete("/product/remove/:id", (req, res) => {
    const { id } = req.params;
    prodSchema
        .find({ _idProd: id })
        .deleteOne()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

router.put("/product/buy/:id", (req, res) => {
    const { id } = req.params;
    prodSchema
        .updateOne({ _idProd: id }, { stock: 104 })
        .then((data) => {

            res.json(data)
        })
        .catch((error) => res.json({ message: error }));
})

export default router