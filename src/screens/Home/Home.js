import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            valor: "",
        }
    }

    evitarSubmit(e){
        e.preventDefault();
        this.props.history.push("/search/"+this.state.valor)
    }

    controlarCambios(e){
        this.setState({
            valor: e.target.value});
    }

    render(){
        return(
            <form onSubmit={(evento)=> this.evitarSubmit(evento)}>
                <input type="text" placeholder="Buscar..." onChange={(evento)=> this.controlarCambios(evento)} value={this.state.valor}/>
            </form>

        // 2 secciones

            //peliculas populares
            

            //peliculas en cartel

        
        )
    }

}
export default withRouter(Home)









//filtrar buscador

//class Home extends Component{
//    constructor(props){
//       super(props)
//       this.state = {
//            valor: "",
//            datosFiltrados: [],
//            datosIniciales: [],
//        }
//    }

//    componentDidMount(){
//        fetch("")
//        .then(response => response.json())
//        .then(data => this.setState({
//            datosIniciales: data.results,
//            dataFiltrados: data.results
//        }))
//    }

//evitarSubmit(e){
//        e.preventDefault();
//    }


//controlarCambios(e){
//        this.setState({
//            valor: e.target.value
//        }, () => this.filtrarObjetos(e.target.value));
//    }


//filtrarObjetos(textoAFiltrar){
//        this.setState({
//            datosFiltrados: this.state.datosIniciales.filter((objeto) => objeto.name.toLowerCase().includes(textoAFiltrar.toLowerCase()))
//        })
//    }



//    render(){
//        return(
//            <form onSubmit={(evento)=> this.evitarSubmit(evento)}>
//                <input type="text" placeholder="Buscar..." onChange={(evento)=> this.controlarCambios(evento)} value={this.state.valor}/>
//            </form>
//            //this.state.datosFiltrados.map((pj, idx) => <CardRM data={pj} key{pj,name+idx}/>)}
//        )
//    }
//}
//export default Home;
