import app from "./app.js";
import cloudinary from "cloudinary";
import cors from "cors";  // Corrected the import for `cors`
import { dbConnection } from "./database/dbConnection.js";

// Cloudinary Configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// CORS Configuration
const corsOptions = {
  origin: 'http://localhost:5174', // Allow requests only from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Customize as needed
  allowedHeaders: ['Content-Type', 'Authorization'], // Customize headers if needed
};

// Apply CORS middleware to all routes
app.use(cors(corsOptions));

// Database connection
dbConnection();

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});


