import "reflect-metadata"
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import Arcanum from "./Arcanum"
import Suit from "./Suit"

@Entity()
class Card {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @ManyToOne((type) => Arcanum)
  @JoinColumn()
  arcanum!: Arcanum

  @Column({type: "text", nullable: false})
  handle!: string

  @Column({type: "int", nullable: false})
  index!: number

  @Column({type: "text", nullable: false})
  name!: string

  @Column({type: "int", nullable: false})
  num!: number

  @ManyToOne((type) => Suit)
  @JoinColumn()
  suit!: Suit
}

export default Card
