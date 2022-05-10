// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import getDatabase from "../../utils/database"

export default async function handler(req, res) {
  const db = await getDatabase()
  const collection = db.collection("User")
  const response = await collection.find()

  res.status(200).json(response)
}
