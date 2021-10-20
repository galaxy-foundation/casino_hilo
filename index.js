const express = require("express");
const path = require("path");

const app = express();

// app.use("/api/profile", require("routes/api/cardplay"));
// app.use("/api/Cardinfo", require("routes/api/Cardinfo"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
