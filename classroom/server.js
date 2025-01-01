const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
// const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(session({secret: "mysupersecretstring"}));

app.get("/test", (req, res) => {
    res.send("test successsful!!");
});

app.listen(3000, () => {
    console.log("server is listening to 3000");
});

// cookies
// app.use(cookieParser("secretcode"));

// app.get("/getsignedcookie", (req, res) => {
//     res.cookie("made-in", "India", {signed: true});
//     res.send("signed cookie sent");
// });

// app.get("/verify", (req, res) => {
//     console.log(req.signedCookies);
//     res.send("verified");
// });

// app.get("/getcookies", (req, res) => {
//     res.cookie("greet", "hello");
//     res.cookie("madeIn", "India");
//     res.send("sent you some cookies!!");
// });

// app.get("/greet", (req, res) => {
//     let { name = "anonymous"} = req.cookies;
//     res.send(`hi, ${name}`);
// });

// app.get("/", (req, res) => {
//     console.dir(req.cookies);
//     res.send("hi, i am root!");
// });

