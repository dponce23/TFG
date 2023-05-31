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
router.post("/product/:id", (req, res) => {
    const { id } = req.params;
    const { stock } = req.body
    if (stock) {
        prodSchema
            .findOne({ _idProd: id }, { stock: 1 })
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
    } else {
        prodSchema
            .find({ _idProd: id })
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
    }

});
router.delete("/product/remove/:id", (req, res) => {
    const { id } = req.params;
    prodSchema
        .find({ _idProd: id })
        .deleteOne()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

router.patch("/product/update/:id", async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    try {
        const producto = await prodSchema.findOne({ _idProd: id });

        if (producto) {
            const nuevoStock = producto.stock - quantity;

            if (nuevoStock <= 0) {
                const stockAleatorio = Math.floor(Math.random() * (200 - 30)) + 30;
                await prodSchema.updateOne(
                    { _idProd: id },
                    { $set: { stock: stockAleatorio } }
                );
            } else {
                await prodSchema.updateOne(
                    { _idProd: id },
                    { $inc: { stock: -quantity } }
                );
            }

            res.json({ message: "Stock actualizado correctamente" });
        } else {
            res.status(404).json({ message: "El producto no fue encontrado" });
        }
    } catch (error) {
        console.error("Error al restar el stock", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
});


export default router