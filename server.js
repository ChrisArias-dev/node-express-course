const express = require("express");
const app = express();

const mockUserData = [{ name: "Mark" }, { name: "Jill" }];
app.get("/users", function(req, res) {
  res.json({
    success: true,
    message: "successfuly got users. Nice!"
  });
});

app.listen(8000, function() {
  console.log("server is running");
});
