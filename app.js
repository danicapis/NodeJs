const express = require("express")
const app = express()

 

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/html/index.htm")
})


app.get("/produtos/:item/:quantidade", function(req, res) {
    res.send("Item: " + req.params.item + "<br>Quantidade " + req.params.quantidade)
})

 

const port = 8081;
app.listen(port, function() {
    console.log(`Servidor ativo em http://localhost:${port}`)
})