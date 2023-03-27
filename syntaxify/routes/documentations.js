const express = require("express");
const router = express.Router();
// You'll be creating this controller module next
const documentationsCtrl = require("../controllers/documentations");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET /documentations
router.get("/index", documentationsCtrl.index);
// GET /documentations/new
router.get("/new", ensureLoggedIn, documentationsCtrl.new);
// GET /documentations/:id (show functionality) MUST be below new route
router.get("/:id", documentationsCtrl.show);
// POST /documentations
router.post("/", ensureLoggedIn, documentationsCtrl.create);

module.exports = router;
