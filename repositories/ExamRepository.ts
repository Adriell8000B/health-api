import { Model } from "mongoose"
import { IExam } from "../models/ExamModel"
import { IExamRepository } from "../interfaces/repository-interface"
import { HandlePromise } from "../utils/handle-promise"

class ExamRepository implements IExamRepository {
  private readonly _exam_model: Model<IExam>

  constructor(exam_model: Model<IExam>) {
    this._exam_model = exam_model
  }

  public async RetrieveExams() {
    const [response, error] = await HandlePromise(this._exam_model.find({}))
    if (error) {}
    return response
  }
}

export default ExamRepository