import React, { Component } from 'react'
import  { firebaseApp }  from '../firebase';
import { Link } from 'react-router-dom';

export default class SignIn  extends Component {
    state = {
        email: '',
        password: '',
        error: {
            message: ''
        }
    }

    signin = () => {
        const {email , password} = this.state;
        console.log(firebaseApp);

        firebaseApp.auth().signInWithEmailAndPassword(email, password)
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
        <h2>Sign In</h2>
        <div className="form-group">
            <input type="text" className="form-control" placeholder='email' style={{marginRight: '5px'}} onChange={(e) => { this.setState({email:e.target.value})}} />
            <input type="password" className="form-control" placeholder='password' style={{marginRight: '5px'}} onChange={(e) => { this.setState({password:e.target.value})}} />
            <button className="btn btn-primary" type='button' onClick={ () => this.signin() }>
                Sign In
            </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to='/signup'>Sign up instead</Link></div>
      </div>
    )
  }
}
