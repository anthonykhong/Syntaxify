const Documentation = require("../models/documentation");

async function index(req, res) {
  // const documentations = await Documentation.find({});
  res.render("documentations/index", {
    title: "All Documentation",
    // documentations,
  });
}

async function index(req, res) {
  const documentation = await Documentation.find({});
  res.render("documentations/index", { title: "Syntaxify", documentation });
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

async function indexLanguages(req, res) {
  res.render("documentations/languages/index", {
    title: "All Languages",
  });
}

function newLanguage(req, res) {
  res.render("documentations/languages/new", {
    title: "Add Language",
    errorMsg: "",
  });
}

async function showLanguage(req, res) {
  res.render("documentations/languages/show"),
    {
      title: "Language",
    };
}

async function indexFrameworks(req, res) {
  res.render("documentations/frameworks/index", {
    title: "All Frameworks",
  });
}

function newFramework(req, res) {
  res.render("documentations/frameworks/new", {
    title: "Add Framework",
    errorMsg: "",
  });
}

async function showFramework(req, res) {
  res.render("documentations/frameworks/show"),
    {
      title: "Framework",
    };
}

async function indexDatabases(req, res) {
  res.render("documentations/databases/index", {
    title: "All Databases",
  });
}

function newDatabase(req, res) {
  res.render("documentations/databases/new", {
    title: "Add Database",
    errorMsg: "",
  });
}

async function showDatabase(req, res) {
  res.render("documentations/databases/show"),
    {
      title: "Database",
    };
}

module.exports = {
  index,
  show,
  new: newDocumentation,
  create,
  newLanguage,
  showLanguage,
  indexLanguages,
  newFramework,
  showFramework,
  indexFrameworks,
  newDatabase,
  showDatabase,
  indexDatabases,
};
