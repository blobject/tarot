import "reflect-metadata"
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
class Suit {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({type: "text", nullable: false})
  name!: string

  @Column({type: "simple-array", array: true, nullable: false})
  nyms!: string[]
}

export default Suit
