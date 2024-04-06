import { DataSource } from "typeorm"
import { Card } from "./entity/Card"

export const source = new DataSource({
  type: "sqlite",
  database: `./app/db/${process.env.DB_FILE}`,
  synchronize: true,
  logging: true,
  entities: [Card],
  migrations: [],
  subscribers: [],
})
