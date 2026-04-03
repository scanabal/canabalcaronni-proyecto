import {Component} from "react"

class SearchResults extends Component{
    constructor(){
        super()
        this.state={}
    }

    componentDidMount(){
        fetch("")
        .then(responde => responde.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    render(){
        return(
            <h1>results</h1>
        )
    }
}

export default SearchResults;