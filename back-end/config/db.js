const mongoose = require("mongoose");

    const connectDb = () => {
        // mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        mongoose.connect(process.env.dbURI)
        .then((res) => {
            console.log('Mongodb connected: ', res.connection.host);
        })
        // .catch((err) => {
        //     console.log(err);
        // });
    }
module.exports = connectDb;