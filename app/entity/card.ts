import "reflect-metadata"
import type {Relation} from "typeorm"
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm"
import {Arcanum, Suit} from "."

@Entity({name: "card", schema: "public"})
export class Card {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({type: "text", nullable: false})
  handle!: string

  @Column({type: "int", nullable: false})
  index!: number

  @Column({type: "text", nullable: false})
  name!: string

  @Column({type: "int", nullable: false})
  num!: number

  @ManyToOne(() => Arcanum, (a) => a.cards, {nullable: false})
  arcanum!: Relation<Arcanum>

  @ManyToOne(() => Suit, (s) => s.cards, {nullable: false})
  suit!: Relation<Suit>
}
