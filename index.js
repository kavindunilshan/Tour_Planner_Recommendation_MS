const express = require('express');
const cors = require("cors");
const app = express();

const routes = require("./routes")
app.use("/api", routes)
app.use(cors());

app.get('/', (req, res) => {
  res.send('Tour Planner: Recommendation Micro Service');
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
