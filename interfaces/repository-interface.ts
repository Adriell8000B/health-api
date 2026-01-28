import { DefaultSchemaOptions, Document, Types } from "mongoose";
import { IExam } from "../models/ExamModel";

export interface IExamRepository {
  RetrieveExams(email: string): Promise<(Document<unknown, {}, IExam, {}, DefaultSchemaOptions> & IExam & Required<{
    _id: Types.ObjectId;
  }> & {
    __v: number;
  } & {
    id: string;
  })[] | null>

  CreateExam(exam_type: string, exam_location: string, exam_date: string): Promise<(Document<unknown, {}, IExam, {}, DefaultSchemaOptions> & IExam & Required<{
    _id: Types.ObjectId;
  }> & {
    __v: number;
  } & {
    id: string;
  }) | null>
}