import express from "express"
import { IRouter } from "../interfaces/router-interfaces"
import { IDatabaseService } from "../interfaces/services-interface"
import { IMiddlewaresManager } from "../interfaces/middlewares-interface"

class Server {
  private readonly _port: number
  private readonly _express: express.Application
  private readonly _router: IRouter
  private readonly _database_service: IDatabaseService
  private readonly _middlewares_manager: IMiddlewaresManager

  constructor(
    port: number,
    express: express.Application,
    router: IRouter,
    database_service: IDatabaseService,
    middlewares_manager: IMiddlewaresManager
  ) {
    this._port = port
    this._express = express
    this._router = router
    this._database_service = database_service
    this._middlewares_manager = middlewares_manager
  }

  private setup(): void {
    this._database_service.SetupDatabaseService()
    this._middlewares_manager.SetupMiddlewares()
    this._router.SetupRoutes()
  }

  private listen(): void {
    try {
      this._express.listen(this._port)
    } catch(error) {
      throw new Error(`Couldn't start server due to an error: ${error}`)
    }
  }

  public Init(): void {
    this.setup()
    this.listen()
  }
}

export default Server