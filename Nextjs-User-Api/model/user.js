import mongoose from "mongoose";
var Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String
    },
    full_name: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
}, {timestamps: true});

const User = mongoose.models.User || mongoose.model("user", userSchema);

export default User;