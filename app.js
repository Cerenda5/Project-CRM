// Imports
const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //cors fournit un middleware Express pour activer CORS avec diverses options.


// Instantiate server
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};

//  CORS
app.use(cors(corsOptions)); // parse requests of content-type - application/json
app.use(bodyParser.json()); // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Configure routes
app.get("/", (req, res) => { // Récupére info du server
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1>Hello guys !</h1>')
});

// Launch server
require("./src/api/routes/user.routes")(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
// Connexion between the server and the mongoDb database
const db = require("./src/api/models");
const { url } = require('./src/api/models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  console.log(url.db);