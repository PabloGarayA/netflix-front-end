import React, {Component} from 'react'

class MovieDetail extends Component{

    constructor(props){
        super(props);
        console.log(props)
    }

    render(){
        return(
            <h1>Movie Detail</h1>
        )
    }
}

export default MovieDetail;