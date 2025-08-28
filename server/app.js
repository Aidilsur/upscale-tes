import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import connectMongoDB from "./config/configMongo.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
connectMongoDB();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use(routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
