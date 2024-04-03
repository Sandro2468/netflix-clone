import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  favorites: {
    type: [{ type: Number }],
    default: [],
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
