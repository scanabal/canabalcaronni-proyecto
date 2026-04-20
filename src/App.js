import React from "react";
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav";
import Detalle from "./components/Detalle/Detalle";
import Home from "./screens/Home/Home";
import CrearCuenta from "./screens/CrearCuenta/CrearCuenta";
import Login from "./screens/Login/Login";
import Favoritos from "./screens/Favoritos/Favoritos"
import Footer from "./components/Footer/Footer"
import { Switch, Route } from "react-router-dom";
import SearchResults from "./screens/SearchResults/SearchResults";
import NotFound from "./screens/NotFound/NotFound";
import MiPerfil from "./screens/MiPerfil/MiPerfil";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Nav/>
        <Switch>
          <Route path="/" exact={true}component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/CrearCuenta" component={CrearCuenta}/> 
           <Route path="/Favoritos" component={Favoritos}/> 
           <Route path="/search/:busqueda" component={SearchResults}/>
           <Route path="/detalle/:id" component={Detalle}/> 
          <Route path="*" component={NotFound}/>
          <Route path="/MiPerfil" component={MiPerfil} />
        </Switch>
      <Footer />
    </React.Fragment>
  );
}


export default App;
