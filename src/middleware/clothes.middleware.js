const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const clothes = req.body;

  if (
    !clothes ||
    !clothes.outfit ||
    !clothes.description ||
    !clothes.picture ||
    !clothes.price
  ) {
    return res
      .status(400)
      .send({ message: 'Campos enviados estão incorretos' });
  }

  next();
};

module.exports = {
  validId,
  validObjectBody,
};
