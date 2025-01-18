import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from 'path';
import ProductRoutes from "./routes/product.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


const __dirname = path.resolve();

//middleware
app.use(express.json()); //allows us to accept JSON data in req.body 
app.use('/api/products', ProductRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/front-end/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'front-end', 'dist', 'index.html'));
    });
}

//connect to mongoDB
app.listen(PORT, () => {
    connectDB();
    console.log("Server started on" + PORT);
})