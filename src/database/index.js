const mongoose = require("mongoose");
const db = require("../config/db");

// Initializing the DB

mongoose.connect(db.mongoURI,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
).then(() => {
    console.log("Conected")
}).catch((err) => {
    console.error(`[csvApp:ERROR] - ${err}`);
});

mongoose.Promise = global.Promise;

module.exports = {
    mongoose
};
