import { create } from "zustand"

interface Card {
  cardId: string
  name: string
  securityCode: string
  cardNumber: string
  holder: string
  expirationDate: string
  brand: "Visa" | "Master"
  favorite: boolean
  used: boolean
}

interface CardStore {
  selectedCard: Card | null
  setSelectedCard: (card: Card | null) => void
}

export const useCardStore = create<CardStore>((set) => ({
  selectedCard: null,
  setSelectedCard: (card) => set({ selectedCard: card }),
}))
