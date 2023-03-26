const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const documetationsCtrl = require('../controllers/documentations');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	
// GET /documentations
router.get('/', documetationsCtrl.index);
// GET /documentations/new
router.get('/new', ensureLoggedIn, documetationsCtrl.new);
// GET /documentations/:id (show functionality) MUST be below new route
router.get('/:id', documetationsCtrl.show);
// POST /documentations
router.post('/', ensureLoggedIn, documetationsCtrl.create);
	
module.exports = router;