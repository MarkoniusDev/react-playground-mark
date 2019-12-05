interface Pokemon {
  id: number;
  name: string;
  imgUrl: string;
  isPicked: boolean;
}

export const  initialBox: Pokemon[] = [
  {
    id: 1,
    name: 'Pashmilla',
    imgUrl: 'https://www.pokepedia.fr/images/d/d3/Sprite_573_XY.png',
    isPicked: false
  },
  {
    id: 2,
    name: 'Lockpin',
    imgUrl: 'https://www.pokepedia.fr/images/8/8d/Sprite_428_XY.png',
    isPicked: false
  },
  {
    id: 3,
    name: 'Arbok',
    imgUrl: 'https://www.pokepedia.fr/images/5/5d/Sprite_024_XY.png',
    isPicked: false
  },
  {
    id: 4,
    name: 'Persian',
    imgUrl: 'https://www.pokepedia.fr/images/c/c9/Sprite_053_XY.png',
    isPicked: false
  },
  {
    id: 5,
    name: 'Majaspic',
    imgUrl: 'https://www.pokepedia.fr/images/9/95/Sprite_497_XY.png',
    isPicked: false
  },
  {
    id: 6,
    name: 'Grahyena',
    imgUrl: 'https://www.pokepedia.fr/images/d/dc/Sprite_262_XY.png',
    isPicked: false
  },
  {
    id: 7,
    name: 'Prismillon',
    imgUrl: 'https://www.pokepedia.fr/images/e/e6/Sprite_666_Floraison_XY.png',
    isPicked: false
  },
]