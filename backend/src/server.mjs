import express from "express";
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();

app.use(bodyParser.json());

app.get("/api/movies", async (req, res) => {
    try{
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser : true} );
        const db = client.db("my-movies");

        const movies = await db.collection("movies").find({}).toArray();
        console.log(movies);
        res.status(200).json(movies);
        client.close();
    }
    catch(error){
        res.status(500).json( {message: "Error connecting to db", error});
    }
    
});




app.listen(8000, () => console.log("Listening on 8000!"));