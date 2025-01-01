const express = require("express");
const router = express.Router();

// index- posts
router.get("/", (req, res) => {
    res.send("GET for posts");
});

// show - users
router.get("/:id", (req, res) => {
    res.send("GET for post id");
});

// post-users
router.post("/", (req, res) => {
    res.send("POST for posts");
});

// delete-posts
router.delete("/:id", (req, res) => {
    res.send("DELETE for post id");
});

module.exports = router;