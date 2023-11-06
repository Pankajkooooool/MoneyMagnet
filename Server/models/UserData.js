import mongoose from "mongoose";

const userDataSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    needs: {
      type: Number,
      required: true,
    },
    wants: {
      type: Number,
      required: true,
    },
    savings: {
      type: Number,
      required: true,
    },
    
    
  },
  { timestamps: true }
);

const UserData = mongoose.model("Post", userDataSchema);

export default UserData;
