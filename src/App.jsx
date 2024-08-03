import './App.css'
import ItemsListContainer from './components/ItemsListContainer'
import NavBar from './components/NavBar'
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
