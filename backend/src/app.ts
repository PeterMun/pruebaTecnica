

import express from "express";
import  DocumentoController  from "../src/interfaces/DocumentoController"

const app = express();
const port = 5000;
const cors = require('cors');

// Middlewares
app.use(express.json());


app.use(cors());


// Routes
app.use("/documents", DocumentoController);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


