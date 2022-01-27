import express from "express";
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.post('/api/movies/:name/rating', (req, res) => {
    const movieName = req.params.name;
})

app.listen(8000, () => console.log("Listening on 8000!"));