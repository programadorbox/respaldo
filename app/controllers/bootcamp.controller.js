const db = require('../models');
const User = db.users;
const Bootcamp = db.bootcamps;
// bootcamp create
exports.createBootcamp = async (req, res) => {
  try {
    const { title, cue, description } = req.body;
    const newBootcamp = await Bootcamp.create({ title, cue, description });
    res.status(201).json(newBootcamp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
