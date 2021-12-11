const express = require("express");
const bodyParser = require("body-parser");

const app = express(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");

})
app.post('/', function (req, res) {

    var weight = parseFloat(req.body.num1);
    var Height = parseFloat(req.body.num2);
    var sum = weight / (Height * Height);
    res.send("" + sum);

})
app.get("/bmi", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.listen(3000, function () {
    console.log("server started runing at port 3000");
});