const express = require("express");
const router = express.Router();
const commentsCtrl = require("../controllers/comments");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.post(
  "/documentations/languages/:id/comments",
  ensureLoggedIn,
  commentsCtrl.createL
);

router.post(
  "/documentations/frameworks/:id/comments",
  ensureLoggedIn,
  commentsCtrl.createF
);

router.post(
  "/documentations/databases/:id/comments",
  ensureLoggedIn,
  commentsCtrl.createD
);

router.delete("/documentations/languages/:id/comments/:id", ensureLoggedIn, commentsCtrl.deleteCommentL);
router.delete("/documentations/frameworks/:id/comments/:id", ensureLoggedIn, commentsCtrl.deleteCommentF);
router.delete("/documentations/databases/:id/comments/:id", ensureLoggedIn, commentsCtrl.deleteCommentD);

module.exports = router;
