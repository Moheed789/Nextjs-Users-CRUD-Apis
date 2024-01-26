import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: String,
        full_name: String,
        email: String,
        age: Number
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema);

export default User;