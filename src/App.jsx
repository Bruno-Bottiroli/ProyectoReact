import './App.css'
import CounterComponent from './components/CounterComponent'
import ItemsListContainer from './components/ItemsListContainer'
import NavBar from './components/NavBar'
import TituloComponente from './components/TituloPrincipal'
function App() {
  const misestilos={
    color:"#111111",
    fontFamily: "cursive",
  } 
  return (

    <>
      <NavBar/>
      <ItemsListContainer/>
    </>
  )
}

export default App
