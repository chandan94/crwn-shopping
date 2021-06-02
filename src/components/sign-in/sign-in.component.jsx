import React from 'react'

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { auth, signInWithGoogle } from '../firebase/firebase-utils';

import './sign-in.styles.scss'

class SignIn extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch(e) {
            console.error(e)
        }

        this.setState({ email: '', passowrd: '' });
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput label='Email' handleChange={this.handleChange} name='email' type='email' value={this.state.email} required />
                        <FormInput label='Password' handleChange={this.handleChange} name='password' type='password' value={this.state.password} required />
                        <div className='button-group'>
                            <Button type='submit'>Sign In</Button>
                            <Button onClick={signInWithGoogle} type='button' googleSignIn={true} >Sign In With Google</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;