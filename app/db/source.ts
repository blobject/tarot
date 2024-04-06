import { DataSource } from "typeorm"

export const source = new DataSource({
  type: "sqlite",
  database: "./app/db/dev.db",
  synchronize: true,
  logging: true,
  entities: [],
  migrations: [],
  subscribers: [],
})
