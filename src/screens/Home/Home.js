class Home extends Component{
    constructor(){
    //    super()
    //    this.state = {
    //        valor: "",
    //        datosFiltrados: [],
    //        datosIniciales: [],
    //    }
    //}

    //componentDidMount(){
    //    fetch("")
    //    .then(response => response.json())
    //    .then(data => {
    //        this.setState({
    //            datosFiltrados: data.results,
    //            datosFiltrados: data.results
    //        })
    //    })


    evitarSubmit(e){
        e.preventDefault();
    }

    controlarCambios(e){
        this.setState({
            valor: e.target.value
        })
    }

    filtrarPersonajes(textoFiltrado){
        this.setState({
            datosFiltrados: this.state.datosInciales.fltrar((personaje) => personaje.name.toLowerCase().includes(textoFiltrado.toLowerCase()))
        })
    }

    render(){
        return(
            <form onSubmit={(evento)=> this.evitarSubmit(evento)}>
                <input type="text" placeholder="Buscar..." onChange={(evento)=> this.controlarCambios(evento)} value={this.state.valor}/>
            </form>
            //{this.state.datosIniciales.length == 0 ?
            //this.state.datosFiltrados.map((pj, idx) => <CardRM data={pj} key{pj,name+idx}/>)}
        )
    }

}
export default Home;