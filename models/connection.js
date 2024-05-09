const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://lealee:12345@myfirstdatabase.4ctm6ge.mongodb.net/weatherapp";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
