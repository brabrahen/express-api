const clothes = [
  {
    id: 1,
    outfit: 'Nobara Black t-shirt',
    description: 'A perfect outfit for a Nobara´s fan',
    picture:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.ign.com%2Fjujutsu-kaisen%2F89744%2Ffeature%2Fjujutsu-kaisen-cosplay-de-nobara-vai-libertar-sua-maldicao&psig=AOvVaw2H15t0Rh10JHB8VJduJsjC&ust=1651883160203000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNCdwbrOyfcCFQAAAAAdAAAAABADZ',
    price: 89.99,
  },
  {
    id: 2,
    outfit: 'Megumi Ying-yang long sleeve',
    description:
      'In this winter, instead of cuddle with someone real, cuddle with Megumi Fushiguro and his wolves',
    picture:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.legiaodosherois.com.br%2F2022%2Fmegumi-fushiguro-jujutsu-kaisen.html&psig=AOvVaw0SVvjrkzSchp3M_o2HawqC&ust=1651883266387000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNih-PHOyfcCFQAAAAAdAAAAABAD',
    price: 119.9,
  },

  {
    id: 3,
    outfit: 'The creation of Itadori sweatshirt',
    description: 'Why not be hugged by two?!',
    picture:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.ign.com%2Fjujutsu-kaisen%2F89723%2Fnews%2Fesse-cosplay-de-sukuna-ryomen-e-classe-especial&psig=AOvVaw0mFRfN1i430FBsp07zMMe5&ust=1651883481542000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOicu9TPyfcCFQAAAAAdAAAAABAD',
    price: 199.9,
  },
];

const findClothingService = () => {
  return clothes;
};

const findClothingByIdService = (idParam) => {
  return clothes.find((clothes) => clothes.id == idParam);
};

module.exports = {
    findClothingService,
    findClothingByIdService,
}
