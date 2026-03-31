import React from "react";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Header />
        <Switch>
          <Route path="/" exact={true}component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/CrearCuenta" component={CrearCuenta}/>
          <Route path="/Favoritos" component={Favoritos}/>
        </Switch>
      <Footer />
    </React.Fragment>
  );
}


export default App;
