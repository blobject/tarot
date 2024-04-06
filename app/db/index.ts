import {PipNum} from "../type/num"
import {getPip} from "../util/num"
import {capitalise, pluralise} from "../util/string"
import {
  arcana as arcanumNames,
  majors as majorNames,
  suits as suitNames,
} from "./names"
import Arcanum from "./entity/Arcanum"
import Card from "./entity/Card"
import Suit from "./entity/Suit"
import {source} from "./source"

const makeMajor = (
  arcanum: Arcanum,
  index: number,
  handle: string,
  name: string,
  nilSuit: Suit
): Card => {
  const card = new Card()
  card.arcanum = arcanum
  card.handle = handle
  card.index = index
  card.name = name
  card.num = index
  card.suit = nilSuit
  return card
}

const makeMinor = (
  arcanum: Arcanum,
  index: number,
  num: number,
  suit: Suit
): Card => {
  const card = new Card()
  card.arcanum = arcanum
  card.handle = `${suit.name}${num}`
  card.index = index
  card.name = `${getPip(num as PipNum)} of ${capitalise(pluralise(suit.name))}`
  card.num = num
  card.suit = suit
  return card
}

const makeDeck = (
  arcana: Arcanum[],
  suits: Suit[]
): Card[] => {
  let index = 0
  const majors = majorNames.map(([handle, name]) => {
    const card = makeMajor(arcana[0], index, handle, name, suits[0])
    index += 1
    return card
  })
  const minors = suits.slice(1).map((suit) =>
    [...Array(14)].map((_, num) => {
      const card = makeMinor(arcana[1], index, num + 1, suit)
      index += 1
      return card
    }))
  return [...majors, ...minors.flat()]
}

const makeArcana = (): Arcanum[] =>
  arcanumNames.map((name) => {
    const arcanum = new Arcanum()
    arcanum.name = name
    return arcanum
  })

const makeSuits = (): Suit[] => {
  const suits = suitNames.map(([name, ...nyms]) => {
    const suit = new Suit()
    suit.name = name
    suit.nyms = nyms
    return suit
  })
  const nilSuit = new Suit()
  nilSuit.name = ""
  nilSuit.nyms = []
  suits.unshift(nilSuit)
  return suits
}

const init = async () => {
  const arcana = makeArcana()
  await source.manager.save(arcana)
  const suits = makeSuits()
  await source.manager.save(suits)
  const deck = makeDeck(arcana, suits)
  await source.manager.save(deck)
}

source.initialize()
  .then(init)
  .catch((error) => {
    console.error(error)
  })
