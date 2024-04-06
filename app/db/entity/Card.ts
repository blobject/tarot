import "reflect-metadata"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Card {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ type: "text", nullable: false })
  arcanum!: string

  @Column({ type: "text", nullable: false })
  handle!: string

  @Column({ type: "int", nullable: false })
  index!: number

  @Column({ type: "text", nullable: false })
  name!: string

  @Column({ type: "int", nullable: false })
  num!: number

  @Column({ type: "text", nullable: false })
  suit!: string
}
