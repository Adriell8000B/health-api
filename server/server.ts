import express from "express"
import { IRouter } from "../interfaces/router-interfaces"
import { IDatabaseService } from "../interfaces/services-interface"

class Server {
  private readonly _port: number
  private readonly _express: express.Application
  private readonly _router: IRouter
  private readonly _database_service: IDatabaseService

  constructor(
    port: number,
    express: express.Application,
    router: IRouter,
    database_service: IDatabaseService
  ) {
    this._port = port
    this._express = express
    this._router = router
    this._database_service = database_service
  }

  private setup(): void {
    this._database_service.SetupDatabaseService()
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