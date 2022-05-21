const clothe = require('../utils/models/clothing.model');

const findClotheSe = async () => {
  try {
    const clothes = await clothe.find();
    if (clothes !== undefined) {
      return clothes;
    } else {
      throw new Error({ message: 'Erro ao encontrar peça' });
    }
  } catch (err) {
    console.log(err);
  }
};

const findClotheByIdSe = async (id) => {
  const clothesById = await clothe.findById(id);
  console.log(clothesById);
  if (clothesById === undefined) {
    throw new Error ({ message: 'Nenhuma peça foi encontrada'})
  } else {
    return clothesById
  }
    
}



const createClotheSe = async (newClothe) => {
  if (newClothe === undefined) {
    throw new Error({ message: 'Nenhum dado recebido' });
  }
  if (newClothe.outfit === undefined || newClothe.picture === '') {
    console.log('Validou');
    throw new Error({ message: 'O produto deve conter imagem' });
  }
  if (newClothe.price <= 0) {
    throw new Error({ message: 'O preço deve ser maior que zero' });
  }
  if (newClothe.description === undefined) {
    throw new Error({ message: 'A peça deve ter descrição' });
  }

  try {
    await clothe.create(newClothe);
    return newClothe;
  } catch (err) {
    console.log(err);
    throw new Error({ message: err });
  }
};

const updateClotheSe = async (id, clotheEdited) => {
  try {
    if (
      !clotheEdited.outfit &&
      !clotheEdited.description &&
      clotheEdited.picture
    ) {
      throw new Error({ message: 'Não recebemos nenhuma peça!' });
    }

    const clothesById = await clothe.findByIdAndUpdate(id, clotheEdited);
    return clothesById;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const deleteClotheSe = async (id) => {
  try {
    const clothesById = await clothe.findByIdAndDelete(id);
    return { message: 'Peça de roupa deletada com sucesso'}
  } catch (err) {
    throw new Error({ message: 'Não foi possível exclui esse item!'})
  }
};

module.exports = {
  findClotheSe,
  findClotheByIdSe,
  createClotheSe,
  updateClotheSe,
  deleteClotheSe,
};
