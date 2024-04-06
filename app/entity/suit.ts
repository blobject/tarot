import "reflect-metadata"
import type {Relation} from "typeorm"
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import {Card} from "."

@Entity({name: "suit", schema: "public"})
export class Suit {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({type: "text", nullable: false})
  name!: string

  @Column({type: "simple-array", array: true, nullable: false})
  nyms!: string[]

  @OneToMany(() => Card, (c) => c.suit)
  cards?: Relation<Card>[]
}
