import React, {Component} from "react";
import CardPeli from "../CardPeli/CardPeli";

class Detalle extends Component{
    constructor(props) {
        super(props);
        this.state= {
            data: ""
        }
    }
    render(){

    }
    componentDidMount () {
const id= props.match.params.id
fetch ()
.then (response => response.json())
.then (data => this.setState({data: data.results}))
.catch (error => console.log(error))

let favoritos = JSON.parse(localStorage.getItem(key)) || [];
}
}




export default Detalle;
