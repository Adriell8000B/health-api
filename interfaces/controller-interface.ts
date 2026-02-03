import { Request, Response } from "express";
export interface IExamController {
  GetRoot(req: Request, res: Response): Response
  GetExams(req: Request, res: Response): Promise<Response>
  AddExam(req: Request, res: Response): Promise<Response>
}