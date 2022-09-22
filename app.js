const express = require("express")

const app = express()

app.use(require("./routes/user.routers"))

app.listen(3000)