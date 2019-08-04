
const mongoose = require("../database").mongoose;

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;