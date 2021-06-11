import { Document, Model } from 'mongoose';
import mongoose from '../../database';

export interface StudentInterface extends Document {
  createdAt: Date;
  name: string;
  class: string;
  num: number;
  ra: number;
};

const StudentSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  name: { type: String, required: true },
  class: { type: String, required: true },
  num: { type: Number, required: true },
  ra: { type: Number, required: true }
});

const Student: Model<StudentInterface> = mongoose.model('Student', StudentSchema);

export default Student;