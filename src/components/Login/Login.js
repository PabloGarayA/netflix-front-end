import React, {Component} from 'react'
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'

const LOGIN = gql`
        mutation login($email:String!, $password:String!){
            login(
            email:$email
            password:$password
            ){
            token
            user{
                name
            }
            }
        }
`

class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }

    onImpuntChange =(event) =>{
        console.log('Me ejecute');
        let {id,value}= event.target
        this.setState({
            [id]:value
        });
    }

    onFormSubmit = (event,login) =>{
        event.preventDefault();
        console.log('submit')
        console.log(this.state)
        login({
            variables:{
                email:this.state.email,
                password:this.state.password
            }
        }).then(response =>{
            console.log(response.data.login.token)
            localStorage.setItem('token',response.data.login.token)
            this.props.history.push('/')
        }).catch(err =>{
            console.log(err)
            alert('te equivocaste')
        })
    }
    
    render(){
        return(
            <Mutation mutation={LOGIN}>
            {
                (login,{data}) => (
                    <form onSubmit={(event) => this.onFormSubmit(event,login)}>
                        <div className="form-group">
                            <label >Correo Electronico</label>
                            <input type="email" className="form-control" id="email" placeholder="Escribe tu Email"
                                onChange={this.onImpuntChange}
                                value={this.state.email}
                            />
                        </div>
                        <div className="form-group">
                            <label >Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder="Escribe tu password"
                                onChange={this.onImpuntChange}
                                value={this.state.password}
                            />
                        </div>
                        <button type= "subimit" className= "btn btn-success">Login</button>
                    </form>
                )
            }
                
            </Mutation>
        )
    }
}

export default Login;