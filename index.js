import express from 'express'; 
import routes from './routes/routes.js';
import connectDB from './db/connectDB.js';
import bodyParser from 'body-parser';
import path from 'path'; 
const app = express(); 
const port = process.env.PORT || 8000; 
const DATABASEURL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/portofolio';


app.use (bodyParser.urlencoded({ extended:false}))

//database configuration
connectDB(DATABASEURL);


// Setup for static files
app.use(express.static(path.join(process.cwd(), 'public')));

// EJS setup
app.set('view engine', 'ejs');
app.set('views', './views');

// Membuat route
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Menggunakan template literals untuk log pesan ke console
});
