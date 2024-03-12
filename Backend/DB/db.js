const mongoose = require('mongoose')
const url = process.env.MONGO_URI;
mongoose.connect(url).then(() => {
    console.log('DB CONNECTED')
}).catch((err) => {
    console.log(err)
})