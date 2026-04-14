import React, {Component} from "react";
import { withRouter, Link } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies= new  Cookies();

class Favoritos extends Component{
    constructor(props){
    super(props);
    this.state={
        peliculas: [],
        series: []
    }
    }
    
    
}
export default Favoritos