import express from "express";
import cors from "cors";
import connectDB from "./Database/db.js";

import products from "./Routes/product.js";

const app = express();

connectDB().then(
  () => console.log("Database Connected..."),
  (error) => console.log(error)
);

app.use(cors()); //cors added
app.use(express.json({ extended: false })); //enables json

app.get("/", (req, res) => res.send("API Running"));

app.use("/api/products", products);

const PORT = process.env.PORT || 5002;

//starting app
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));

export default app;
