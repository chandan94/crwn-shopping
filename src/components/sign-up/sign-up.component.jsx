import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-up.styles.scss'
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { signUpUser } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Password and confirm password do not match.");
        }

        signUpUser(email, password, displayName);
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up using email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label='Name' name='displayName' type='text' value={this.state.displayName} handleChange={this.handleChange} required />
                    <FormInput label='Email' name='email' type='email' value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label='Password' name='password' type='password' value={this.state.password} handleChange={this.handleChange} required />
                    <FormInput label='Confirm Password' name='confirmPassword' type='password' value={this.state.confirmPassword} handleChange={this.handleChange} required />
                    <Button type='button' onClick={this.handleSubmit}>Sign Up</Button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpUser: (email, password, displayName) =>
        dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);