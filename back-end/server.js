const app = require('./app');
const dotenv = require('dotenv');
const connectDb = require('./config/db');

dotenv.config({path: './config/config.env'});

connectDb();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// unhandled promise rejection
process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down server due to unhandled promise rejection");
    server.close(() => {
        process.exit(1);
    })
});