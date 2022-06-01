import connectToDatabase from "../../lib/mongodb";

export default async function (req, res) {
    const db = await connectToDatabase();


    // GET
    if (req.method == "GET") {
        const movies = await db.collection("movies")
            .find({ year: 2010 })
            .sort({ title: 1 })
            .toArray();
        
        res.json(movies);
    }


    // POST
    if (req.method == "POST") {

        const createdMovie = await db.collection("movies")
            .insertOne({ title: "Interestelar", year: 2010 })

        res.json(createdMovie)
        
    }


    // PUT


    if (req.method == "PUT") {
        const updatedMovie = await db.collection("movies")
            .updateOne({ _id: "573a13c6f29313caabd7354b" }, { $set: { title: "D" }})

        res.json(updatedMovie);
    }


    // DELETE


    if (req.method == "DELETE") {
        const deletedMovie = await db.collection("movies")
            .deleteOne({ _id: "627d9273ac819adf99be831b" })

        res.json(deletedMovie);
    }
}
