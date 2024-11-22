const axios = require("axios").default

const url = "http://xxxx:3000"

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getPayment(): Promise<any> {
  try {
    await delay(2000)
    const response = await axios.get(`${url}/payment`)
    const payment = response.data

    if (!payment) {
      throw new Error("Payment not found")
    }

    return payment
  } catch (err) {
    console.error("Erro no getPaymentService", err)
    throw err
  }
}

export async function getAccountData(): Promise<any> {
  try {
    await delay(2000)
    const response = await axios.get(`${url}/account`)
    const accountData = response.data

    if (!accountData) {
      throw new Error("Account not found")
    }

    return accountData
  } catch (err) {
    console.error("Erro no getAccountData", err)
    throw err
  }
}
