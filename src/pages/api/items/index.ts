import type { NextApiRequest, NextApiResponse } from "next"
import { client } from "database"
import { Item } from "model"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>
) {
  const { Item: ItemModel } = await client()

  const items: Item[] = await ItemModel.find().catch()

  return res.status(200).json(items)
}
