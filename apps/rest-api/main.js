const server = require("express");
const app = server();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.status(200).json({data: "Salut !"})
});

app.listen(port, (err) => {
    if(err){
        console.log(`Unable to start Server, Error: ${err}`)
    } else {
        console.log(`Backend server now listening on port ${port}`)
    }
});
