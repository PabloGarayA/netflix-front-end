import React, {Component} from 'react'
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo'

const CREATE_USER= gql`
        mutation signup($name:String!,$email:String!,$lastname:String!,$password:String!,$birth_date:String!){
            signup(
                name:$name
                email:$email
                lastname:$lastname
                password:$password
                birth_date:$birth_date
            ){
            user{
                id
                email
            }
            token
            }
        }
`

class signup extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            lastname: "",
            password: "",
            birth_date:""
        }
    }

    onImpuntChange= (event) =>{
        let {id,value} = event.target
        this.setState({
            [id]:value
        }) 
    }

    onFormSubmit= (event,signup) => {
        event.preventDefault();
        console.log ('clic');
        console.log (this.state);
        signup({
            variables:{
                name:this.state.name,
                email:this.state.email,
                lastname:this.state.lastname,
                password:this.state.password,
                birth_date:this.state.birth_date,

            }
        }).then(response =>{
            console.log(response);
            this.props.history.push('/login')
        }).catch(err =>{
            console.log(err);
            alert('DOU')
        })
    }

    render(){
        return(
            <Mutation mutation={CREATE_USER}>
            {(signup,{data})=>(
                <div>
                <form onSubmit={(e)=> this.onFormSubmit(e,signup)}>
                <div className="form-group">
                    <label >Correo Electronico</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Escribe tu Email"
                        onChange={this.onImpuntChange}
                        value={this.state.email}
                    />
                </div>
                <div className="form-group">
                    <label >Nombre</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Escribe tu Nombre"
                        onChange={this.onImpuntChange}
                        value={this.state.name}
                    />
                </div>
                <div className="form-group">
                    <label >Apellido</label>
                    <input type="text" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Escribe tu apellido"
                        onChange={this.onImpuntChange}
                        value={this.state.lastname}
                    />
                </div>
                <div className="form-group">
                    <label >Fecha de nacimiento</label>
                    <input type="text" className="form-control" id="birth_date" aria-describedby="emailHelp" placeholder="Escribe tu fecha de nacimiento"
                        onChange={this.onImpuntChange}
                        value={this.state.birth_date}
                    />
                </div>
                <div className="form-group">
                    <label >Contraseña</label>
                    <input type="password" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Escribe tu contraseña"
                        onChange={this.onImpuntChange}
                        value={this.state.password}
                    />
                </div>
                <button type="submit" className="btn btn-danger">
                    Enviar
                </button>
                </form>
            </div>

            )}
            </Mutation>
                    )
    }
}

export default signup;