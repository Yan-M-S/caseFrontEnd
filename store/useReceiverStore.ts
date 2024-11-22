import { create } from "zustand"

interface Receiver {
  id: string
  name: string
}

interface ReceiverStore {
  receiver: Receiver | null
  setReceiver: (receiver: Receiver | null) => void
}

export const useReceiverStore = create<ReceiverStore>((set) => ({
  receiver: null,
  setReceiver: (receiver) => set({ receiver }),
}))
