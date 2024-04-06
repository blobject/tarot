import "reflect-metadata"
import type {Relation} from "typeorm"
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import {Card} from "."

@Entity({name: "arcanum", schema: "public"})
export class Arcanum {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({type: "text", nullable: false})
  name!: string

  @OneToMany(() => Card, (c) => c.arcanum)
  cards?: Relation<Card>[]
}
