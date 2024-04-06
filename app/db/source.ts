import {DataSource} from "typeorm"
import {Arcanum, Card, Suit} from "../entity"

export const source = new DataSource({
  type: "sqlite",
  database: `./${process.env.DB_FILE}`,
  // logging: true,
  logging: process.env.BUILD_ENV === "dev",
  synchronize: process.env.BUILD_ENV === "dev",
  entities: [Arcanum, Card, Suit],
  migrations: [],
  subscribers: [],
})
