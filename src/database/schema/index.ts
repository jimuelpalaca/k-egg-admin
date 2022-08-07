import mongoose, { Schema, Types } from "mongoose"

const ItemSchema = new Schema({
  sku: String,
  name: String,
  basePrice: Types.Decimal128,
})

export const Item = mongoose.models.Item || mongoose.model("Item", ItemSchema)

const schemas = {
  Item,
}

export default schemas
