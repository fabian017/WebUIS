const express = require('express');
const conectarDB = require("./config/db");
const cors = require('cors');

// Creamos el servidor
const app = express();

// conectamos DB
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {
    console.log("Esta sirviendo")
})