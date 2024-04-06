import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: "text", nullable: false })
  name!: string
}
