const express = require("express");
const app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/time.html")
});

app.post('/time', (req, res) => {
    console.log(request);
})

app.listen(8080, () => {
    console.log("Server running on port", 8080);
});