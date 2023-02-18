const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

const index = require("./routers/main")

app.use("/", index);



app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});