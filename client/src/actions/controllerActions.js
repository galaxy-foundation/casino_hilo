import { drawCard } from "../actions/deckActions";

// export const passTurn = () => ({
//   type: 'PASS_TURN'
// })

export const guessHigher = (deckId, card, faceUpPile) =>
  drawCard(deckId, 1, card, faceUpPile);
export const guessLower = (deckId, card, faceUpPile) =>
  drawCard(deckId, -1, card, faceUpPile);
