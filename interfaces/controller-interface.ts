import { Request, Response } from "express";
import { DefaultSchemaOptions, Document, Types } from "mongoose";
import { IExam } from "../models/ExamModel";

export interface IExamController {
  GetRoot(req: Request, res: Response): Response
  GetExams(req: Request, res: Response): Promise<Response>
  AddExam(req: Request, res: Response): Promise<(Document<unknown, {}, IExam, {}, DefaultSchemaOptions> & IExam & Required<{
    _id: Types.ObjectId;
  }> & {
    __v: number;
  } & {
    id: string;
  }) | null>
}