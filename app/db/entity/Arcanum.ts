import "reflect-metadata"
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
class Arcanum {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({type: "text", nullable: false})
  name!: string
}

export default Arcanum
