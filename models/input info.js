const mongoose = require('mongoose');

const inpSchema = new mongoose.Schema({
    roleSET:{
        type : String
    },
    nameSet: {
        type: String
    },
    servertag: {
        type: String
    },
    GuildID : String

});
const Messagemodel = module.exports = mongoose.model('inputset', inpSchema);
