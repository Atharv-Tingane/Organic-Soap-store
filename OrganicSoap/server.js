const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserRoutes = require('./routes/UserRoutes')
const CategoryRoutes = require('./routes/CategoryRoutes')
const ProductRoutes = require('./routes/ProductRoutes')
require('dotenv').config()
const cookieParser = require('cookie-parser')


app.use(express.json())
app.use(cookieParser())

app.use("/user", UserRoutes);
app.use("/category", CategoryRoutes)
app.use("/products", ProductRoutes)


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected')

    app.listen(5000, () => {
      console.log('Server running on port 5000')
    })
  })
  .catch(err => {
    console.log(err)
  })

    