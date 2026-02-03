import mongoose, { Document, model } from "mongoose"

export interface IExam extends Document {
  exam_email: string
  exam_type: string
  exam_location: string
  exam_date: String
}

const ExamSchema = new mongoose.Schema({
  exam_email: { required: true, type: String },
  exam_type: { required: true, type: String },
  exam_location: { required: true, type: String },
  exam_date: { required: true, type: String },
})

export default model<IExam>("ExamModel", ExamSchema, "exams")