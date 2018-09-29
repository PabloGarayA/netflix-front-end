import { Query } from "react-apollo";
import './home.css'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import Navbar from './Navbar'
import Movie from './Movie/Movie'

const QUERY_ME = gql`
    query me{
        me{
            name
        }
    }
`

const QUERY_MOVIES=gql`
    query movies{
        movies{
            id
            title
            poster
        }
    }
`

class Home extends Component{

    constructor(props){
        super(props);
    }

    getMe= () => (
        <Query query={QUERY=ME}>
            {({loading,err,data}) =>{
                if (loading) return 'loading...'
                if (err) return 'error del servicio'
                return <Navbar name={data.me-name}/>
            }}
        </Query>
    )
    renderMovies = () => (
        <Query query={QUERY_MOVIES}>
            {
                ({loading,err,data}) =>{
                    if (loading) return 'carga tus peliculas'
                    if (err) return 'error del servidor'
                    return data.movies.map(movie => <Movie title={movie.title} poster={movie.poster} id={movie.id}/>)
                    }
                }
            }
        </Query>
    )

    render(){
        return (
            <div className="cover">
                {this.getMe()}
                <div className="row container-fuild">
                {this.renderMovies()}
                </div>
                
            </div>
        )
    }
}

export default Home;