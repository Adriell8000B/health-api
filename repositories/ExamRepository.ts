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
    const [response, error] = await HandlePromise(this._exam_model.find())
    if (error) {
      console.log(error)
    }
    return response
  }

  public async CreateExam(exam_type: string, exam_location: string, exam_date: string) {
    const [response, error] = await HandlePromise(this._exam_model.create({
      exam_type: exam_type,
      exam_location: exam_location,
      exam_date: exam_date
    }))

    if(error) {
      console.log(error)
    }

    return response
  }
}

export default ExamRepository