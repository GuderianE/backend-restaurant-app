const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/routes');
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/takeaway", routes);

mongoose.connect('mongodb://localhost:27017/Menu?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
    .then(() => console.log('connected to MongoDB...'))
    .catch((err) => console.log(err))

app.listen(PORT, (req, res) => {
    console.log(`Sever is running on port ${PORT}`);
})