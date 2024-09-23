const products = [
  {
    id: 0,
    title: "Catedral",
    price: 1500,
    stock: 8,
    category: "arquitectura",
    image: "/Imagenes/catedral.JPG",
    imageitem: "../../public/Imagenes/catedral.JPG"
  },
  {
    id: 1,
    title: "Urbanico",
    price: 3300,
    stock: 9,
    category: "arquitectura",
    image: "/Imagenes/estiloaleman.JPG",
    imageitem: "../../public/Imagenes/estiloaleman.JPG"
  },
  {
    id: 2,
    title: "Fuente",
    price: 1500,
    stock: 9,
    category: "arquitectura",
    image: "/Imagenes/fuente.JPG",
    imageitem: "../../public/Imagenes/fuente.JPG"
  },
  {
    id: 3,
    title: "Grafitti",
    price: 1600,
    stock: 3,
    category: "arquitectura",
    image: "/Imagenes/grafitti.JPG",
    imageitem: "../../public/Imagenes/grafitti.JPG"
  },
  {
    id: 4,
    title: "Molino Thea",
    price: 4500,
    stock: 2,
    category: "arquitectura",
    image: "/Imagenes/molino.JPG",
    imageitem: "../../public/Imagenes/molino.JPG"
  },
  {
    id: 5,
    title: "Aguilucho",
    price: 900,
    stock: 6,
    category: "naturaleza",
    image: "/Imagenes/aguilucho.JPG",
    imageitem: "../../public/Imagenes/aguilucho.JPG"
  },
  {
    id: 6,
    title: "Buho",
    price: 800,
    stock: 1,
    category: "naturaleza",
    image: "/Imagenes/buho.jpg",
    imageitem: "../../public/Imagenes/buho.jpg"
  },
  {
    id: 7,
    title: "Flores",
    price: 3000,
    stock: 4,
    category: "naturaleza",
    image: "/Imagenes/flores.jpg",
    imageitem: "../../public/Imagenes/flores.jpg"
  },
  {
    id: 8,
    title: "Grafitti verde",
    price: 7000,
    stock: 1,
    category: "arquitectura",
    image: "/Imagenes/verde.JPG",
    imageitem: "../../public/Imagenes/verde.JPG"
  },
  {
    id: 9,
    title: "Muerte Escrita",
    price: 3400,
    stock: 2,
    category: "Collage",
    image: "/Imagenes/finalizadocollage.png",
    imageitem: "../../public/Imagenes/finalizadocollage.png"
  },
  {
    id: 10,
    title: "Closet 1",
    price: 3500,
    stock: 1,
    category: "Collage",
    image: "/Imagenes/closet.png",
    imageitem: "../../public/Imagenes/closet.png"
  },
  {
    id: 11,
    title: "Closet 2",
    price: 2800,
    stock: 2,
    category: "Collage",
    image: "/Imagenes/closet 2.png",
    imageitem: "../../public/Imagenes/closet 2.png"
  },
  {
    id: 12,
    title: "Desviados",
    price: 2800,
    stock: 2,
    category: "Collage",
    image: "/Imagenes/desviados4.png",
    imageitem: "../../public/Imagenes/desviados4.png"
  },
  {
    id: 13,
    title: "Sensibilidad",
    price: 2800,
    stock: 2,
    category: "Collage",
    image: "/Imagenes/sensi.png",
    imageitem: "../../public/Imagenes/.png"
  },
  {
    id: 14,
    title: "Proteger",
    price: 2800,
    stock: 2,
    category: "Collage",
    image: "/Imagenes/gestofinal.png",
    imageitem: "../../public/Imagenes/closet 2.png"
  },
  {
    id: 15,
    title: "Presencias",
    price: 2800,
    stock: 2,
    category: "Collage",
    image: "/Imagenes/seul4.png",
    imageitem: "../../public/Imagenes/closet 2.png"
  },
  {
    id: 15,
    title: "Transliteral",
    price: 2800,
    stock: 2,
    category: "Collage",
    image: "/Imagenes/transli.png",
    imageitem: "../../public/Imagenes/closet 2.png"
  },
]

export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};


export const getCategory = (category) => {
  return products.filter((product) => product.category === category);
  
};
