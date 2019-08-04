

const mongoose = require("../database").mongoose;

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;