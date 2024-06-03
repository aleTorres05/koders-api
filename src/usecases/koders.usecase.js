const Koders = require("../models/koders.model");

async function create(koderData) {
  const newKoder = await Koders.create(koderData);
}

async function getAll() {
  const allKoders = await Koders.find();
  return allKoders;
}

async function getById(id) {
  const koder = await Koders.findById(id);
  return koder;
}

async function deleteById(id) {
  const koderDeleted = Koders.findByIdAndDelete(id);
  return koderDeleted;
}

async function updateById(id, newKoderData) {
  const koderUpdated = await Koders.findOneAndUpdate(id, newKoderData, {
    new: true,
  });
  return koderUpdated;
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
};
