import { Mongoose } from "mongoose"
import { IDatabaseService } from "../interfaces/services-interface"
import { GetEnv } from "../utils/get-env"

class DatabaseService implements IDatabaseService {
  private readonly _mongoose: Mongoose

  constructor(mongoose: Mongoose) {
    this._mongoose = mongoose
  }
  
  private async connect() {
    try {
      await this._mongoose.connect(GetEnv("DATABASE_URL"))
      console.log("Mongodb connected!")
    } catch(error) {
      console.log(error)
    }
  }

  public SetupDatabaseService(): void {
    this.connect()
  }
}

export default DatabaseService
