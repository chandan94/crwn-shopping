import React from 'react'
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';

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

        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props;
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
                            <Button onClick={googleSignInStart} type='button' googleSignIn >Sign In With Google</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);