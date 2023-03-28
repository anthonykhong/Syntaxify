const Language = require("../models/language");
const Framework = require("../models/framework");
const Database = require("../models/database");

async function index(req, res) {
  res.render("documentations/index", { title: "Syntaxify" });
}

// async function show(req, res) {
//   const documentation = await Documentation.findById(req.params.id);
//   res.render("documentations/show", { title: "Documentation", documentation });
// }

// function newDocumentation(req, res) {
//   res.render("documentations/new", {
//     title: "Add Documentation",
//     errorMsg: "",
//   });
// }

// async function create(req, res) {
//   try {
//     const documentation = await Documentation.create(req.body);
//     res.redirect(`/${documentation._id}`);
//   } catch (err) {
//     console.log(err);
//     res.render("documentations/new", { errorMsg: err.message });
//   }
// }

async function indexLanguages(req, res) {
  try {
    const languages = await Language.find({});
    res.render("documentations/languages/index", {
      title: "All Languages",
      languages: languages,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

function newLanguage(req, res) {
  if (req.method === "POST") {
    create(req, res);
  } else {
    res.render("documentations/languages/new", {
      title: "Add Language",
      errorMsg: "",
   });
  }
}

async function showLanguage(req, res) {
  const language = await Language.findById(req.params.id)
  res.render("documentations/languages/show", {
    title: "Language",
    language,
  }); 
}

async function indexFrameworks(req, res) {
  try {
    const frameworks = await Framework.find({});
    res.render("documentations/frameworks/index", {
      title: "All Frameworks",
      Frameworks: frameworks,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

function newFramework(req, res) {
  if (req.method === "POST") {
    create(req, res);
  } else {
    res.render("documentations/frameworks/new", {
      title: "Add Framework",
      errorMsg: "",
    });
  }
}


async function showFramework(req, res) {
  const framework = await Framework.findById(req.params.id)
  res.render("documentations/languages/show", {
    title: "Framework",
    framework,
  }); 
}

async function indexDatabases(req, res) {
  try {
    const databases = await Database.find({});
    res.render("documentations/databases/index", {
      title: "All Databases",
      databases: databases,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

function newDatabase(req, res) {
  if (req.method === "POST") {
    create(req, res);
  } else {
    res.render("documentations/databases/new", {
      title: "Add Database",
      errorMsg: "",
    });
  }
}

async function showDatabase(req, res) {
  const database = await Database.findById(req.params.id)
  res.render("documentations/databases/show", {
    title: "Databases",
    database,
  }); 
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
};
