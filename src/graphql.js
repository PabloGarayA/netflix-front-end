import {ApolloClient} from 'apollo-client'
import {createHttpLink, HttpLink} from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import {InMemoryCache} from 'apollo-cache-inmemory'

const httpLink = createHttpLink ({
    uri:'http://netflix-clone-b23.herokuapp.com/'
});
///va al link revisa y trae todo el schema

const authLink = setContext((_,{headers}) => {
    const token = localStorage.getItem('token');
    return{
        headers:{
            ...headers,
            authorization: token ? `JWT ${token}`:''
        }
    }
});
//visualiza si existe un JWT y lo almacena en la local storage

const client = new ApolloClient({
    link:authLink.concat(httpLink),
    cache:new InMemoryCache()
})

export default client;