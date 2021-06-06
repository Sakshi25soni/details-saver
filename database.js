import mongoose from "mongoose";

const schema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  lname: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  storage: {
    type: String,
    required: true,
  },
});

const Person = new mongoose.model("Person", schema);

export default Person;
