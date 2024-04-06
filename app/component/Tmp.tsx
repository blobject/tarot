import React from "react"
import {getArcanum, getSuits} from "../db/get"
import {Card, Suit} from "../entity"
import {MajorNum} from "../type/num"
import {getNumeral} from "../util/num"
import {capitalise, pluralise} from "../util/string"

function SuitList({suit, cards}: {suit: Suit, cards: Card[]}) {
  return (
    <>
      <h4>{capitalise(pluralise(suit.name))}</h4>
      <ul>
        {cards.map(({handle, index, name}) => (
          <li key={handle}>{index}: {name}</li>
        ))}
      </ul>
    </>
  )
}

function Minor(
  {suits}: {suits: Suit[]}
) {
  return (
    <>
      <h3>Minor Arcana</h3>
      {suits.map((suit) => (
        <SuitList key={suit.name} suit={suit} cards={suit.cards ?? []} />
      ))}
    </>
  )
}

function Major(
  {cards}: {cards: Card[]}
) {
  return (
    <>
      <h3>Major Arcana</h3>
      <ul>
        {cards.map(({handle, name, num}) => (
          <li key={handle}>{getNumeral(num as MajorNum)}: {name}</li>
        ))}
      </ul>
    </>
  )
}

export default async function Tmp() {
  const major = await getArcanum("major")
  const suits = await getSuits()

  return (
    <div>
      <Major cards={major.cards ?? []} />
      <Minor suits={suits} />
    </div>
  )
}
