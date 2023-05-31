import express from "express";
import userSchema from "../models/userModel.js";

const router = express.Router();

// create user
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/users", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// get all userNames
router.post("/users/single_user", (req, res) => {
    const { _id, userName, email, phone } = req.body;
    let filtro = { $or: [{ _id }, { userName }, { email }, { phone }] }
    userSchema
        .findOne(filtro)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get user by userName 
router.post("/users/is_authorized", (req, res) => {
    const { userName } = req.body;
    userSchema
        .findOne({ userName: userName }, { password: 1 })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get a user by id
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// update products array user
router.patch("/users/update/userProds", (req, res) => {
    const { _id, myProducts } = req.body;
    userSchema
        .updateOne({ _id: _id }, { $set: { myProducts: myProducts } })
        .then(res.json({ message: "Stock actualizado correctamente" }))
        .catch((error) => res.json({ message: error }));
});

export default router