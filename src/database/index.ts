import mongoose from "mongoose"
import schema from "./schema"

const { MONGO_DB_URL } = process.env

export const client = async () => {
  const conn = await mongoose
    .connect(MONGO_DB_URL!, { dbName: "default" })
    .catch((err) => console.log(err))

  console.log("Mongoose Connection Established")

  return { conn, ...schema }
}
