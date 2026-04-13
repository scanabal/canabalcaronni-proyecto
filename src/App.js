import React from "react";
import Header from "./components/Header/Header"
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import CrearCuenta from "./screens/CrearCuenta/CrearCuenta";
import Footer from "./components/Footer/Footer"
import { Switch, Route } from "react-router-dom";
import SearchResults from "./screens/SearchResults/SearchResults";
import NotFound from "./screens/NotFound/NotFound";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home/>
        <Switch>
          <Route path="/" exact={true}component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/CrearCuenta" component={CrearCuenta}/> 
          {/* <Route path="/Favoritos" component={Favoritos}/> */}
          <Route path="/search/:busqueda" component={SearchResults}/>
          {/* <Route path="/detalle" component={Detalle}/> */}
          <Route path="*" component={NotFound}/>
        </Switch>
      <Footer />
    </React.Fragment>
  );
}


export default App;
