import './App.css'
import ItemsListContainer from './components/ProductsView/ItemsListContainer'
import NavBar from './components/Navigation/NavBar'
import HomeComponent from './components/HomeView/HomeComponent';
import ContactComponent from './components/contactView/ContactComponent';
import SobreNosotrosComponent from './components/SobreNosotrosView/SobreNosotrosComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductComponent from './components/ProductsView/ProductComponent';
import SingleProd from './components/SingleProductView/ItemDetailContainer';
import ItemDetailContainer from './components/SingleProductView/ItemDetailContainer';
function App() {
  const misestilos={
    color:"#111111",
    fontFamily: "cursive",
  } 
  return (

    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomeComponent/>} />
          <Route exact path="/contact" element={<ContactComponent/>} />
          <Route exact path="/SobreNosotros" element={<SobreNosotrosComponent/>} />
          <Route exact path="/Products" element={<ProductComponent/>} />
          <Route exact path="/Product/:prodId" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
