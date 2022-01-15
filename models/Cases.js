import moogoose from "mongoose";

const CasesSchema  = moogoose.Schema({
    name: {
        type: String,
        required: true
      },
      gender: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true
      },
      updated: {
        type: Date,
        default: Date.now
      }
});

export default moogoose.model("Cases", CasesSchema)