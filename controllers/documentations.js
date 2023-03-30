const Language = require("../models/language");
const Framework = require("../models/framework");
const Database = require("../models/database");

async function index(req, res) {
  res.render("documentations/index", { title: "Syntaxify" });
}

async function indexLanguages(req, res) {
  try {
    const languages = await Language.find({});
    res.render("documentations/languages/index", {
      title: "All Languages",
      languages: languages,
    });
  } catch (err) {
    res.status(500).send("Server Error");
  }
}

function newLanguage(req, res) {
  res.render("documentations/languages/new", {
    title: "Add Language",
  });
}

async function showLanguage(req, res) {
  const language = await Language.findById(req.params.id);
  res.render("documentations/languages/show", {
    title: "Language",
    language,
  });
}

async function createLanguage(req, res) {
  try {
    const language = await Language.create(req.body);
    res.redirect(`/documentations/languages/${language._id}`);
  } catch (err) {
    res.render("/documentations/languages/new", { errorMsg: err.message });
  }
}

async function editLanguage(req, res) {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const language = await Language.findById(id);
    if (!language) {
      return res.status(404).send("Language not found");
    }
    language.content = content;
    await language.save();
    res.redirect(`/documentations/languages/${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}

async function indexFrameworks(req, res) {
  try {
    const frameworks = await Framework.find({});
    res.render("documentations/frameworks/index", {
      title: "All Frameworks",
      frameworks: frameworks,
    });
  } catch (err) {
    res.status(500).send("Server Error");
  }
}

function newFramework(req, res) {
  res.render("documentations/frameworks/new", {
    title: "Add Framework",
  });
}

async function showFramework(req, res) {
  const framework = await Framework.findById(req.params.id);
  res.render("documentations/frameworks/show", {
    title: "Framework",
    framework,
  });
}

async function createFramework(req, res) {
  try {
    const framework = await Framework.create(req.body);
    res.redirect(`/documentations/frameworks/${framework._id}`);
  } catch (err) {
    res.render("/documentations/frameworks/new", { errorMsg: err.message });
  }
}

async function editFramework(req, res) {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const framework = await Framework.findById(id);
    if (!framework) {
      return res.status(404).send("Framework not found");
    }
    framework.content = content;
    await framework.save();
    res.redirect(`/documentations/frameworks/${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}

async function indexDatabases(req, res) {
  try {
    const databases = await Database.find({});
    res.render("documentations/databases/index", {
      title: "All Databases",
      databases: databases,
    });
  } catch (err) {
    res.status(500).send("Server Error");
  }
}

function newDatabase(req, res) {
  res.render("documentations/databases/new", {
    title: "Add Database",
  });
}

async function showDatabase(req, res) {
  const database = await Database.findById(req.params.id);
  res.render("documentations/databases/show", {
    title: "Databases",
    database,
  });
}

async function createDatabase(req, res) {
  try {
    const database = await Database.create(req.body);
    res.redirect(`/documentations/databases/${database._id}`);
  } catch (err) {
    res.render("/documentations/databases/new", { errorMsg: err.message });
  }
}

async function editDatabase(req, res) {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const database = await Database.findById(id);
    if (!database) {
      return res.status(404).send("Database not found");
    }
    database.content = content;
    await database.save();
    res.redirect(`/documentations/databases/${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}

module.exports = {
  index,
  newLanguage,
  showLanguage,
  indexLanguages,
  newFramework,
  showFramework,
  indexFrameworks,
  newDatabase,
  showDatabase,
  indexDatabases,
  createDatabase,
  createFramework,
  createLanguage,
  editDatabase,
  editLanguage,
  editFramework,
};
