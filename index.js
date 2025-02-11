import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(password) {
    return password === "1234";
}

app.post("/submit", (req, res) => {
    const password = req.body.password;
    if (checkPassword(password)) {
        res.sendFile(__dirname + "/home.html");
    } else {
        res.send("Incorrect password");
    }
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});