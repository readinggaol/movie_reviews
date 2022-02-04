import express from "express";
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import multer from 'multer';

const app = express();

//working with Postman but not front end, but only for files without spaces in names
var storage = multer.diskStorage({
    destination: '../public',
    filename: function(req, file, callback) {
      callback(null, file.originalname);
    }
  });

const upload = multer({ storage: storage});

app.use(express.json());



//Get movies for home page
app.get("/api/movies", async (req, res) => {
    try{
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser : true} );
        const db = client.db("my-movies");

        const movies = await db.collection("movies").find({}).toArray();
        res.status(200).json(movies);
        client.close();
    }
    catch(error){
        res.status(500).json( {message: "Error connecting to db", error});
    }
    
});


//API 'interrupt' that isn't doing its job
app.post('/api/addMovie', upload.single('poster'), addMovie);

async function addMovie(req, res) {
    console.log(req.body);
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
        const db = client.db('my-movies');

        await db.collection('movies').insertOne( {name:req.body.name, release_date:req.body.release_date, actors:req.body.actors, poster:req.body.filename, rating:req.body.rating})
        res.status(200).json({message: "Success"});
        client.close();
    }
    catch( error) {
        res.status(500).json( { message: "Error connecting to db", error});
    }

}


//Remove movie
app.post("/api/removeMovie", async (req, res) => {
    try {
        const client =  await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
        const db = client.db('my-movies');
        await db.collection('movies').deleteOne( {name: req.body.name}, true)
        res.status(200).json({message: "Success"});
        client.close();
    }
    catch( error) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
})

app.listen(8000, () => console.log("Listening on 8000!"));