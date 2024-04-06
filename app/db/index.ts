import { cards } from "./def"
import { Card } from "./entity/Card"
import { source } from "./source"

const init = async () => {
  const deck: Card[] = []
  Object.values(cards).forEach((properties) => {
    const card = new Card() as Card
    card.arcanum = properties.arcanum
    card.handle = properties.handle
    card.index = properties.index
    card.name = properties.name
    card.num = properties.num
    card.suit = properties.suit
    deck.push(card)
  })
  await source.manager.save(deck)
}

source.initialize()
  .then(init)
  .catch((error) => {
    console.error(error)
  })
