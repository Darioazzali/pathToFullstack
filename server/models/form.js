const mongoose = require('mongoose');


const { Schema } = mongoose;

const formSchema = new Schema ({
    address: { type: String, required: true},
    color: {type: String, required: true},
    type: {type: String, required: true}
});

module.exports = mongoose.model("clitotem", formSchema)
