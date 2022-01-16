import moogoose from "mongoose";

const StudentsSchema  = moogoose.Schema({
    name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      updated: {
        type: Date,
        default: Date.now
      }
});

export default moogoose.model("Students", StudentsSchema)