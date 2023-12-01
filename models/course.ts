import Category from './category';
import Tutor from './tutor';
import { Schema, model, models } from 'mongoose';

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tutorId: {
    type: Schema.Types.ObjectId,
    ref: 'Tutor',
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  previewImage: {
    type: String
  },
  enrollmentCount: {
    type: Number,
    default: 0,
  },
  requirements: {
    type: [String],
    default: [],
  },
  completionBenefits: {
    type: [String],
    default: [],
  },
  resources: {
    type: [
      {
        heading: {
          type: String,
        },
        lessons: {
          type: [
            {
              title: {
                type: String,
              },
              content: {
                type: String,
              },
              type: {
                type: String,
                enum: ['document', 'video'],
              },
            },
          ],
        },
      },
    ],
    default: [],
  },
});

const Course = models?.Course || model('Course', CourseSchema);

export default Course;
