import { Request, Response } from "express";
import { IExamController } from "../interfaces/controller-interface";
import { IExamRepository } from "../interfaces/repository-interface";

class ExamController implements IExamController {
  private _exam_repository: IExamRepository

  constructor(exam_repository: IExamRepository) {
    this._exam_repository = exam_repository
  }

  public GetRoot(_req: Request, res: Response): Response {
    return res.send("Hi mom!")
  }

  public async GetExams(_req: Request, res: Response): Promise<Response> {
    return res.send(await this._exam_repository.RetrieveExams())
  }
}

export default ExamController