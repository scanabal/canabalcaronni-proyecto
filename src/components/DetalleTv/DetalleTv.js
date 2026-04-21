import React, { Component } from 'react';

class DetalleTv extends Component{
    constructor(props) {
        super(props)
        this.state = {
            serie: null
        
        };
    }
  

    componentDidMount() {
        
        const id = this.props.match.params.id
        
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=57f7a2a82d57f08ae3dba76c4340b8c0`)
        .then(response => response.json())
        .then(data => {
            this.setState({ serie: data })
        })
        .catch(error => console.log(error))
    }

    render() {
        
        const serie= this.state.serie

        if (!serie) {
            return 
        }
        return (
            <div>
                <CardSerie serie={serie}  />
            </div>
            
        )
    }
}





export default DetalleTv