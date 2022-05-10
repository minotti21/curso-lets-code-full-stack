import { MongoClient  } from "mongodb"

const URL = process.env.MONGODB_URL

export default async function getDatabase() {
    //Estabelecendo conexão com banco de dados
    const client = new MongoClient(URL)

    await client.connect()

    return client.db("ToDoListDatabase")
}