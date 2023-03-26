const Documentation = require("../models/documentation");

async function create(req, res) {
  try {
    const documentation = await Documentation.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    documentation.comments.push(req.body);
    await documentation.save();
    res.redirect(`/documentations/${documentation._id}`);
  } catch (error) {
    console.error(err);
    res.status(500).send(err.message);
  }
}

function deleteComment(req, res, next) {
  Documentation.findOne({
    "comments._id": req.params.id,
    "comments.user": req.user._id,
  }).then(function (documentation) {
    if (!documentation) return res.redirect("/documentations");
    documentation.comments.remove(req.params.id);
    documentation
      .save()
      .then(function () {
        res.redirect(`/documentations/${documentation._id}`);
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
