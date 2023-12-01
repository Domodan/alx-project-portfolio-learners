import Course from "./course";
import { Schema, model, models } from "mongoose";

const TutorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // courses: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: Course,
  //   },
  // ],
});

const Tutor = models?.Tutor || model("Tutor", TutorSchema);

export default Tutor;
