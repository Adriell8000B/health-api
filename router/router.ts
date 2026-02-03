import express from "express"
import { IRouter } from "../interfaces/router-interfaces"
import { IExamController } from "../interfaces/controller-interface"

class Router implements IRouter {
  private readonly _express: express.Application
  private readonly _exam_controller: IExamController

  constructor(express: express.Application, exam_controller: IExamController) {
    this._express = express
    this._exam_controller = exam_controller
  }

  public SetupRoutes(): void {
    this._express.get("/", (req, res) => {
      this._exam_controller.GetRoot(req, res)
    })

    this._express.get("/exams", (req, res) => {
      this._exam_controller.GetExams(req, res)
    })

    this._express.post("/exams/add", (req, res) => {
      this._exam_controller.AddExam(req, res)
    })
  }
}

export default Router