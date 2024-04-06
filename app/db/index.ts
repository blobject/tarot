import { source } from "./source"
import { Card } from "./entity/Card"

const init = async () => {
  const card = new Card()
  card.name = "foo"
  await source.manager.save(card)
  console.log("SAVE Card: ", card.id)

  const cards = await source.manager.find(Card)
  console.log("LOAD Cards", cards)
}

source.initialize()
  .then(init)
  .catch((error) => {
    console.error(error)
  })
