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

// Routes for languages
<<<<<<< HEAD
router.get("/languages", documentationsCtrl.indexLanguages);
router.get("/languages/new", ensureLoggedIn, documentationsCtrl.newLanguage);
router.get("/languages/:id", documentationsCtrl.showLanguage);

// Routes for frameworks
router.get("/frameworks", documentationsCtrl.indexFrameworks);
router.get("/frameworks/new", ensureLoggedIn, documentationsCtrl.newFramework);
router.get("/frameworks/:id", documentationsCtrl.showFramework);

// Routes for databasFramework.Frarouter.get("/databases", documentationsCtrl.indexDatabases);
router.get("/frameworks", documentationsCtrl.indexDatabases);
router.get("/frameworks/new", ensureLoggedIn, documentationsCtrl.newDatabase);
router.get("/frameworks/:id", documentationsCtrl.showDatabase);
=======
router.get("/languages", documentationsCtrl.languages.index);
router.get("/languages/new", ensureLoggedIn, documentationsCtrl.languages.new);
router.get("/languages/:id", documentationsCtrl.languages.show);

// Routes for frameworks
router.get("/frameworks", documentationsCtrl.frameworks.index);
router.get("/frameworks/new", ensureLoggedIn, documentationsCtrl.frameworks.new);
router.get("/frameworks/:id", documentationsCtrl.frameworks.show);

// Routes for databases
router.get("/databases", documentationsCtrl.databases.index);
router.get("/databases/new", ensureLoggedIn, documentationsCtrl.databases.new);
router.get("/databases/:id", documentationsCtrl.databases.show);
>>>>>>> a8d20a3 (Slight Modifications to Views)

module.exports = router;
