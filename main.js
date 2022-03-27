
const express = require("express");
const app = express();

const PORT = process.env.PORT || 1738;

app.use(express.static("client"));
app.use(express.json());

app.listen(PORT, () => {
    console.log("App now is running on the port " + PORT);
});
