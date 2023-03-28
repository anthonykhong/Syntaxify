const Language = require("../models/language");
const Framework = require("../models/framework");
const Database = require("../models/database");
const ensureLoggedIn = require("../config/ensureLoggedIn");

async function createL(req, res) {
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

async function createF(req, res) {
  try {
    const framework = await Framework.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    framework.comments.push(req.body);
    await framework.save();
    res.redirect(`/documentations/frameworks/${framework._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
}

async function createD(req, res) {
  try {
    const database = await Database.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    database.comments.push(req.body);
    await database.save();
    res.redirect(`/documentations/databases/${database._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
}

function deleteCommentL(req, res, next) {
  Language.findOne({
    "comments._id": req.params.id,
    "comments.user": req.user._id,
  }).then(function(language) {
    if (!language) return res.redirect("/languages");
    language.comments.remove(req.params.id);
    language
      .save()
      .then(function() {
        res.redirect(`/documentations/languages/${language._id}`);
      })
      .catch(function (err) {
        return next(err);
      });
  });
}


function deleteCommentF(req, res, next) {
  Framework.findOne({
    "comments._id": req.params.id,
    "comments.user": req.user._id,
  }).then(function(framework) {
    if (!framework) return res.redirect("/frameworks");
    framework.comments.remove(req.params.id);
    framework
      .save()
      .then(function() {
        res.redirect(`/documentations/frameworks/${framework._id}`);
      })
      .catch(function (err) {
        return next(err);
      });
  });
}


function deleteCommentD(req, res, next) {
  Database.findOne({
    "comments._id": req.params.id,
    "comments.user": req.user._id,
  }).then(function(database) {
    if (!database) return res.redirect("/databases");
    database.comments.remove(req.params.id);
    database
      .save()
      .then(function() {
        res.redirect(`/documentations/databases/${database._id}`);
      })
      .catch(function (err) {
        return next(err);
      });
  });
}

module.exports = {
  createL,
  createF,
  createD,
  deleteCommentL,
  deleteCommentF,
  deleteCommentD,
};
