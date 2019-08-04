
/*
INSERT THIS FILE TO .gitignore
Explain how configurate in README.md
*/

// Verify the environment
if (process.env.NODE_ENV == "production") {
    module.exports = { mongoURI: "mongodb+srv://futAppapi:futAppapi@cluster0-kj5ow.mongodb.net/futappapi-prod?retryWrites=true&w=majority" }
} else {
    //module.exports = { mongoURI: "mongodb+srv://futAppapi:futAppapi@cluster0-kj5ow.mongodb.net/futappapi-dev?retryWrites=true&w=majority" }
    module.exports = { mongoURI: "mongodb://localhost:27017/futAppapi-dev" }
}

// To use when Mongo Atlas is unavailable.
// "mongodb://localhost:27017/futAppapi-dev"
