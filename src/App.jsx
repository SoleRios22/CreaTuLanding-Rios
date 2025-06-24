
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"; 
import Footer from "./components/Footer";

function App() {
 

  return (
   <div className="app-container">
      <NavBar />
      <ItemListContainer saludo={ "Bienvenidos a mi Tienda Online" }/>
      <Footer />
   </div>
  )
}

export default App
