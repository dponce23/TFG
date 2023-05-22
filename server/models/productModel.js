import mongoose from "mongoose";

const prodSchema = mongoose.Schema({
    _idProd: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Object,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    exclusive: {
        type: Boolean,
        required: true,
    }
})

export default mongoose.model("products", prodSchema)