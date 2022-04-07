
const mongoose = require('mongoose');
const URL = process.env.MONGO_PASSWORD;
mongoose.connect(URL)
.then(db => console.log('Connected to DataBase'))
.catch(err => console.error(err))


module.exports = mongoose;