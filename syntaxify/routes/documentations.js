const express = require("express");
const router = express.Router();
// You'll be creating this controller module next
const documentationsCtrl = require("../controllers/documentations");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// // GET /documentations
// router.get("/index", documentationsCtrl.index);
// // GET /documentations/new
// router.get("/new", ensureLoggedIn, documentationsCtrl.new);
// // GET /documentations/:id (show functionality) MUST be below new route
// router.get("/:id", documentationsCtrl.show);
// // POST /documentations
// router.post("/", ensureLoggedIn, documentationsCtrl.create);

// Routes for languages
router.get("/languages", documentationsCtrl.indexLanguages);
router.get("/languages/new", ensureLoggedIn, documentationsCtrl.newLanguage);
router.get("/languages/:id", documentationsCtrl.showLanguage);

// Routes for frameworks
router.get("/frameworks", documentationsCtrl.indexFrameworks);
router.get("/frameworks/new", ensureLoggedIn, documentationsCtrl.newFramework);
router.get("/frameworks/:id", documentationsCtrl.showFramework);

// Routes for databasFramework.Frarouter.get("/databases", documentationsCtrl.indexDatabases);
router.get("/databases", documentationsCtrl.indexDatabases);
router.get("/databases/new", ensureLoggedIn, documentationsCtrl.newDatabase);
router.get("/databases/:id", documentationsCtrl.showDatabase);

module.exports = router;
