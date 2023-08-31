const express = require('express');
const process = require('process');

if (process.argv[2] == undefined) {
    console.log("Port number not defined. Start as 'npm start <port-number>'");
    return 1;
}
console.log("Port Number: " + process.argv[2]);
const app = express();

app.use(express.static('src'));

app.listen(parseInt(process.argv[2]), () => {
    console.log("Server started on port: " + process.argv[2]);
});
