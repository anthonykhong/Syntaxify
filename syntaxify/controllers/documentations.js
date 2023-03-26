const Documentation = require('../models/documentaion');

async function show(req, res) {
  const documentation = await Documentation.findById(req.params.id);
  res.render('documentaions/show', { title: 'Documentation', documentation});
}

function newDocumentation(req, res) {
  res.render('documentations/new', { title: 'Add Documentation', errorMsg: '' });
}

async function create(req, res) {
  try {
    const documentation = await Documentation.create(req.body);
    res.redirect(`/documentations/${documentation._id}`);
  } catch (err) {
    console.log(err);
    res.render('documentations/new', { errorMsg: err.message });
  }
}

module.exports = {
    show,
    new: newDocumentation,
    create
};
