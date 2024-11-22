import { create } from "zustand"

interface FeeDetails {
  amount: number
  percentage: number
}

interface Fees {
  fixed: FeeDetails
  installments: FeeDetails
}

interface Installment {
  amountToPay: number
  fees: Fees
  installmentAmount: number
  installments: number
}

interface InstallmentStore {
  simulation: Installment[]
  transactionId: string
  amountToPay: number
  setSimulation: (simulation: Installment[]) => void
  setAmountToPay: (amountToPay: number) => void
  setTransactionId: (transactionId: string) => void
}

export const useInstallmentStore = create<InstallmentStore>((set) => ({
  simulation: [],
  transactionId: "",
  amountToPay: 0,
  setSimulation: (simulation) => set({ simulation }),
  setAmountToPay: (amountToPay) => set({ amountToPay }),
  setTransactionId: (transactionId) => set({ transactionId }),
}))
