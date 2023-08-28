const express = require('express');
const app = express();

app.use(express.static('src'));

app.listen(4000, () => {
    console.log("Server started at 4000");
});
