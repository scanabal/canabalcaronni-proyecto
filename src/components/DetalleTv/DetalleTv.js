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
fetch ("https://api.themoviedb.org/3/tv/{series_id}?api_key=57f7a2a82d57f08ae3dba76c4340b8c0")
.then (response => response.json())
.then (data => this.setState({data: data.results}))
.catch (error => console.log(error))

let favoritos = JSON.parse(localStorage.getItem(key)) || [];
}
}




export default Detalle;
