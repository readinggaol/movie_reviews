import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());


app.listen(8000, () => console.log("Listening to 8000!"));

app.get("/test", (req, res) => res.send("testing"));