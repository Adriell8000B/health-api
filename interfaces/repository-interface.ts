import { DefaultSchemaOptions, Document, Types } from "mongoose";
import { IExam } from "../models/ExamModel";

export interface IExamRepository {
  RetrieveExams(exam_email:string): Promise<IExam[] | null>

  CreateExam(exam_email:string, exam_type: string, exam_location: string, exam_date: string): Promise<IExam | null>
}