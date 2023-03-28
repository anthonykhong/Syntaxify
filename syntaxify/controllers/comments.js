const Language = require("../models/language");
const Framework = require("../models/framework");
const Database = require("../models/database");
const ensureLoggedIn = require("../config/ensureLoggedIn");

async function create(req, res) {
  try {
    const language = await Language.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    language.comments.push(req.body);
    await language.save();
    res.redirect(`/documentations/languages/${language._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
}

function deleteComment(req, res, next) {
  Language.findOne({
    "comments._id": req.params.id,
    "comments.user": req.user._id,
  }).then(function (language) {
    if (!language) return res.redirect("/languages");
    language.comments.remove(req.params.id);
    language
      .save()
      .then(function () {
        res.redirect(`/documentations/languages/${language._id}`);
      })
      .catch(function (err) {
        return next(err);
      });
  });
}

module.exports = {
  create,
  delete: deleteComment,
};
