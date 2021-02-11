const express = require("express");
const app = express();
require("./Config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
require("./Routes/jokes.routes")(app);
const port = 8000;
app.listen(port, () => console.log('The server is running on ${port}'));