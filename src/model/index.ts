import mongoose from "mongoose"

export type Item = {
  _id: string
  sku: string
  name: string
  basePrice: mongoose.Decimal128
}
