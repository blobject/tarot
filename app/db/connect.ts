import {DataSource} from "typeorm"
import {source} from "./source"

export async function connection(): Promise<DataSource> {
  if (!source.isInitialized) {
    try {
      await source.initialize()
    } catch (error) {
      console.error(error)
    }
  }
  return source
}
