const products = [
  {
    id: 0,
    title: "Catedral",
    price: 1500,
    stock: 8,
    category: "arquitectura",
    image: "public/Imagenes/catedral.JPG"
  },
  {
    id: 1,
    title: "Urbanico",
    price: 3300,
    stock: 9,
    category: "arquitectura",
    image: "public/Imagenes/estiloaleman.JPG"
  },
  {
    id: 2,
    title: "Fuente",
    price: 1500,
    stock: 9,
    category: "arquitectura",
    image: "public/Imagenes/fuente.JPG"
  },
  {
    id: 3,
    title: "Grafitti",
    price: 1600,
    stock: 3,
    category: "arquitectura",
    image: "public/Imagenes/grafitti.JPG"
  },
  {
    id: 4,
    title: "Molino Thea",
    price: 4500,
    stock: 2,
    category: "arquitectura",
    image: "public/Imagenes/molino.JPG"
  },
  {
    id: 5,
    title: "Aguilucho",
    price: 900,
    stock: 6,
    category: "naturaleza",
    image: "public/Imagenes/aguilucho.JPG"
  },
  {
    id: 6,
    title: "Buho",
    price: 800,
    stock: 1,
    category: "naturaleza",
    image: "public/Imagenes/buho.jpg"
  },
  {
    id: 7,
    title: "Flores",
    price: 3000,
    stock: 4,
    category: "naturaleza",
    image: "public/Imagenes/flores.jpg"
  },
  {
    id: 8,
    title: "Grafitti verde",
    price: 7000,
    stock: 1,
    category: "arquitectura",
    image: "public/Imagenes/verde.JPG"
  },
  {
    id: 9,
    title: "Muerte Escrita",
    price: 3400,
    stock: 2,
    category: "Collage",
    image: "public/Imagenes/finalizadocollage.png"
  },
  {
    id: 10,
    title: "Closet 1",
    price: 3500,
    stock: 1,
    category: "Collage",
    image: "public/Imagenes/closet.png"
  },
  {
    id: 11,
    title: "Closet 2",
    price: 2800,
    stock: 2,
    category: "Collage",
    image: "public/Imagenes/closet 2.png"
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
