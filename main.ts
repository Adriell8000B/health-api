import ExamController from "./controllers/ExamController";
import Router from "./router/router";
import Server from "./server/server";
import express from "express"
import DatabaseService from "./services/DatabaseService";
import mongoose from "mongoose";
import ExamModel from "./models/ExamModel";
import ExamRepository from "./repositories/ExamRepository";
import MiddlewaresManager from "./middlewares/MiddlewaresManager";

const Express = express()
const Mongoose = mongoose

const exam_repository = new ExamRepository(ExamModel)
const exam_controller = new ExamController(exam_repository)
const middlewares_manager = new MiddlewaresManager(Express, [
  express.json(),
  express.urlencoded({extended: true})
])
const database_service = new DatabaseService(Mongoose)
const router = new Router(Express, exam_controller)
const server = new Server(18080, Express, router, database_service, middlewares_manager)

server.Init()