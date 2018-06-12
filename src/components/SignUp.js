import React, { Component } from 'react'
import  { firebaseApp }  from '../firebase';
import { Link } from 'react-router-dom';

export default class SignUp  extends Component {
    state = {
        email: '',
        password: '',
        error: {
            message: ''
        }
    }

    signup = () => {
        const {email , password} = this.state;
        console.log(firebaseApp);

        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch( error => {
                console.log('error', error);
                this.setState({
                    error
                });
            })
        
    }
  render() {
    return (
      <div className='form-inline' style={{margin: '5%'}}>
        <h2>Sign Up</h2>
        <div className="form-group">
            <input type="text" className="form-control" placeholder='email' style={{marginRight: '5px'}} onChange={(e) => { this.setState({email:e.target.value})}} />
            <input type="password" className="form-control" placeholder='password' style={{marginRight: '5px'}} onChange={(e) => { this.setState({password:e.target.value})}} />
            <button className="btn btn-primary" type='button' onClick={ () => this.signup() }>
                Sign Up
            </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to='/signin'>Sign in instead</Link></div>
      </div>
    )
  }
}
