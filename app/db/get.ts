import {Not} from "typeorm"
import {Arcanum, Card, Suit} from "../entity"
import {connection} from "./connect"

export async function getArcanum(
  name: string
): Promise<Arcanum> {
  const conn = await connection()
  return conn.getRepository(Arcanum).findOneOrFail({
    relations: {cards: true},
    where: {name},
  })
}

export async function getArcana(): Promise<Arcanum[]> {
  const conn = await connection()
  return conn.getRepository(Arcanum).find({
    order: {name: "ASC"},
    relations: {cards: true},
  })
}

export async function getCard(
  index: number
): Promise<Card> {
  const conn = await connection()
  return conn.getRepository(Card).findOneOrFail({
    relations: {arcanum: true, suit: true},
    where: {index},
  })
}

export async function getCards(): Promise<Card[]> {
  const conn = await connection()
  return conn.getRepository(Card).find({
    order: {index: "ASC"},
    relations: {arcanum: true, suit: true},
  })
}

export async function getSuit(
  name: string
): Promise<Suit> {
  const conn = await connection()
  return conn.getRepository(Suit).findOneOrFail({
    relations: {cards: true},
    where: {name},
  })
}

export async function getSuits(): Promise<Suit[]> {
  const conn = await connection()
  return conn.getRepository(Suit).find({
    order: {cards: {index: "ASC"}},
    relations: {cards: true},
    where: {name: Not("")},
  })
}
