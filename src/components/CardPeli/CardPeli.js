import React, {Component} from "react";
import { withRouter, Link } from "react-router-dom";

class CardPeli extends Component {
    constructor(props){
        super(props);
        this.state = {
            ver: "Ver descripcion",
            clase: "no-mostrar"
        }
    }

    boton(){
        if(this.state.ver === "Ver descripcion"){
            this.setState({
                ver: "Ocultar descripcion",
                clase: "mostrar"
            })
        }
        else{this.setState({
            ver: "Ver descripcion",
            clase:"no-mostrar"
        })}
    }

    render(){
        return(
            <React.Fragment>

                {/*img (cambiar img y titulo*/}
                <img src={this.props.pelicula.imagen} alt={this.props.pelicula.titulo} />

                {/*titulo (cambiar titulo*/}
                <h2>{this.props.pelicula.titulo}</h2> 

                {/*boton ver descripcion*/}
                <div className="card-buttons">
                    <button onClick={() => this.boton()}>{this.state.ver}</button>
                </div>
 
                {/*descripcion (cambiar descripcion)*/}
                <div className={this.state.clase}>
                    <p>{this.props.pelicula.descripcion}</p>
                </div>
                
                {/*boton ir a detalle (cambiar id)*/}
                <div className="card-buttons">
		            <Link to={"/detalle/" + this.props.pelicula.id}>
                        <button>Ir a detalle</button>
                    </Link>
                </div>

            {/*boton agregar/quitar de favoritos en CardRM*/}

            </React.Fragment>
        )
    }
}

export default CardPeli