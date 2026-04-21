import React, { Component } from 'react';
import CardSeries from '../CardSeries/CardSeries';

class DetalleTv extends Component{
    constructor(props) {
        super(props)
        this.state = {
            serie: null,
            loading:true
        
        };
    }
  

    componentDidMount() {
        
        const id = this.props.match.params.id
        
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=57f7a2a82d57f08ae3dba76c4340b8c0`)
        .then(response => response.json())
        .then(data => {
            this.setState({ serie: data, loading:false  })
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
                <CardSeries serie={serie}  />
            </div>
            
        )
    }
}





export default DetalleTv