const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static("public"));
const mongoose = require("mongoose");
app.use(bodyParser.urlencoded({ extended: true }));
//mongoose.connect("mongodb://localhost:27017/todolistDB");
mongoose.connect("mongodb+srv://admin_vinay:Test123@cluster0.98zqz.mongodb.net/test", { useUnifiedTopology: true }, { useNewUrlParser: true });
const dataSchema = {
    firstname: String,
    lastname: String,
    email: String,
    message: String
};
const data = mongoose.model("Resumes", dataSchema);
app.get("/", function (req, res)
{
    res.sendFile(__dirname + "/index.html");

});
app.post("/", function (req, res)
{
    const datas = new data({

        firstname: (req.body.uname),
        lastname: (req.body.pword),
        email: (req.body.email),
        message: (req.body.message)

    });
    datas.save();

    res.redirect("/success");
});
app.get("/success", function (req, res)
{
    res.sendFile(__dirname + "/success.html");
});
app.listen(process.env.PORT || 3000, function (req, res)
{
    console.log("running");
});