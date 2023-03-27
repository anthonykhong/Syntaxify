const Documentation = require("../models/documentation");

async function index(req, res) {
  // const documentations = await Documentation.find({});
  res.render("documentations/index", {
    title: "All Documentation",
    // documentations,
  });
}

async function show(req, res) {
  const documentation = await Documentation.findById(req.params.id);
  res.render("documentations/show", { title: "Documentation", documentation });
}

function newDocumentation(req, res) {
  res.render("documentations/new", {
    title: "Add Documentation",
    errorMsg: "",
  });
}

async function create(req, res) {
  try {
    const documentation = await Documentation.create(req.body);
    res.redirect(`/${documentation._id}`);
  } catch (err) {
    console.log(err);
    res.render("documentations/new", { errorMsg: err.message });
  }
}

module.exports = {
  index,
  show,
  new: newDocumentation,
  create,
};
