import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userId: {
        type: Number,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    billing_address: {
        type: String,
        required: true,
    },
    default_shipping_address: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
})

export default mongoose.model("user", userSchema);