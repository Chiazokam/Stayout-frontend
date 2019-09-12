import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spinner } from 'reactstrap';
import {
  Modal,
  Cancel,
  FormInput,
  Button,
  FormInputError
} from '../../components/common';
import { closeSignupModal, togglePassword, submitSignup } from '../../store/actions';
import Google from '../../assets/images/google.svg';
import Twitter from '../../assets/images/twitter.svg';
import Facebook from '../../assets/images/facebook.svg';


class Signup extends Component {
  state = {
    password: '',
    email: '',
    username: ''
  }

  closeSignupModal = () => {
    const { closeSignupModal: modalClose } = this.props;
    modalClose();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  togglePasswordVisibility = () => {
    const { togglePassword: toggle } = this.props;
    toggle();
  }

  handleSubmission = () => {
    const { password, email, username } = this.state;
    const { submitSignup: submit } = this.props;
    const user = {
      password,
      email,
      username
    };
    submit(user);
  }

  render() {
    const {
      isSignupModalOpen,
      isPasswordVisible,
      isLoading,
    } = this.props;
    const { username, email, password } = this.state;

    return (
      <React.Fragment>
        <Modal
          isModalOpen={isSignupModalOpen}
          className='signup-modal'
        >
          <Cancel clicked={this.closeSignupModal} />
          <p className='signup-bold-text'>Sign Up</p>
          <FormInput
            className='signup-input'
            type='text'
            name='username'
            placeholder='Username'
            onChange={this.handleChange}
            value={username}
          />
          <FormInputError>This is an error message</FormInputError>

          <FormInput
            className='signup-input'
            type='text'
            name='email'
            placeholder='Email'
            onChange={this.handleChange}
            value={email}
          />
          <FormInputError>This is an error message</FormInputError>

          <FormInput
            className='signup-input'
            type={isPasswordVisible ? 'text' : 'password'}
            name='password'
            placeholder='Password'
            onChange={this.handleChange}
            value={password}
            addonText={(
              <FontAwesomeIcon
                onClick={this.togglePasswordVisibility}
                icon={isPasswordVisible
                  ? 'eye'
                  : 'eye-slash'}
              />
              )}
          />
          <FormInputError>This is an error message</FormInputError>

          <Button className='signup-button' clicked={this.handleSubmission}>
            Submit
            {isLoading && <Spinner color='light' />}
          </Button>
          <p className='alternate-auth'>
            Already a user? &nbsp;
            <span>Sign in</span>
          </p>
          <p className='alternate-auth-social'>Sign up with</p>
          <div className='social-auth'>
            <img src={Google} alt='Google' />
            <img src={Facebook} alt='Facebook' />
            <img src={Twitter} alt='Twitter' />
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  closeSignupModal,
  togglePassword,
  submitSignup,
};

const mapStateToProps = state => ({
  isSignupModalOpen: state.auth.isSignupModalOpen,
  isPasswordVisible: state.auth.isPasswordVisible,
  payload: state.auth.payload,
  isLoading: state.auth.isLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
