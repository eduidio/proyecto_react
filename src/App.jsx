import {BrowserRouter, Routes,Route} from "react-router-dom"
import "./App.css"
import {Navegador } from "./components/NavBar"
import {ItemListContainer} from "./components/ItemListContainer"
import {ItemDetailContainer} from "./components/ItemDetailContainer"

function app() {
  return(
      <BrowserRouter> 
      <Navegador />
      
      <Routes>
        <Route path="/" element={<ItemListContainer />}  />
        <Route path="/Item" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      </BrowserRouter>
  )
}

export default app 