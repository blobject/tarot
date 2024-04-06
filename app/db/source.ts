import { DataSource } from "typeorm"
import Arcanum from "./entity/Arcanum"
import Card from "./entity/Card"
import Suit from "./entity/Suit"

export const source = new DataSource({
  type: "sqlite",
  database: `./app/db/${process.env.DB_FILE}`,
  synchronize: true,
  logging: true,
  entities: [Arcanum, Card, Suit],
  migrations: [],
  subscribers: [],
})
