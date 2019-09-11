const createHandler = require("azure-function-express").createHandler;
const express = require("express");
 
// Create express app as usual
const app = express();
app.get("/api/hello-world", (req, res) => {
    req.context.log({ hello: "world" });
    
  });
 
// Binds the express app to an Azure Function handler
module.exports = createHandler(app);