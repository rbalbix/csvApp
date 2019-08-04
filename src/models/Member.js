

const mongoose = require("../database").mongoose;

const MemberSchema = new mongoose.Schema({
    champId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Champ",
        required: true
    },
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        required: true
    },
    playerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Member = mongoose.model("Member", MemberSchema);

module.exports = Member;