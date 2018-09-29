import React, {Component} from 'react'
import './movie.css'
import {Link} from 'react-router-dom'

class Movie extends Component{
    render(){
        return (
            <div className="col-md d-flex align-items-stretch mt-5">
                <div className="card Movie__card">
                    <img className="card-img-top" src={this.props.poster} alt="">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <Link to={`/movies/${this.props.id}`}>Ver</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movie;