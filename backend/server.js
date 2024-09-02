const express = require('express');
const app = express();
require('dotenv').config();
const personRoutes = require("../backend/routes/personRoutes.js");
const menuRoutes = require("./routes/menuRoutes.js");
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const db = require('./db.js')


// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/person', personRoutes)
app.use('/menu', menuRoutes)




app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
});