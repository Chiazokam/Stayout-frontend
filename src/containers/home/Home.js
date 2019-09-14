/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import { BackDrop, AboutBox } from '../../components/home';
import Signup from '../signup/Signup';
import { openSignupModal, passMenuProps } from '../../store/actions';
import user from '../../assets/images/user.svg';
import team from '../../assets/images/team.svg';
import card from '../../assets/images/card.svg';
import {
  BackImage,
  Logo,
  Button,
  CustomSection,
  ThinLine,
} from '../../components/common';

export class Home extends Component {
  state = {
    menu: ['Sign in', 'Sign up', 'Spaces']
  };

  componentDidMount() {
    this.passMenuProps();
  }

  openSignupModal = () => {
    const { openSignupModal: openSignup } = this.props;
    openSignup();
  }

  passMenuProps = () => {
    const { passMenuProps: passMenu } = this.props;
    const { menu } = this.state;
    passMenu(menu);
  }

  render() {
    const { menu } = this.state;

    return (
      <React.Fragment>
        <BackDrop />
        <Logo className='logo' />
        <ul className='nav-container'>
          <li className='nav-web-home'>
            <Link to={`/${menu[2]}`}>
              {menu[2]}
            </Link>
          </li>
          <li className='nav-web-home'>
            {menu[0]}
          </li>
          <li
            onClick={this.openSignupModal}
            role='button'
            tabIndex='0'
            className='nav-web-home'
          >
            {menu[1]}
          </li>
        </ul>
        <BackImage className='home-image' />

        <Signup />

        <Button className='home-button'>Search Spaces</Button>
        <CustomSection className='home-about'>
          <Row>
            <AboutBox
              className='about-box-left'
              src={user}
              alt='Single User'
              aboutText='Find your workspace conveniently'
            />
            <ThinLine className='home-thin-line' />
            <AboutBox
              className='about-box-middle'
              src={team}
              alt='Team'
              aboutText='Find a workspace for your team'
            />
            <ThinLine className='home-thin-line' />
            <AboutBox
              className='about-box-right'
              src={card}
              alt='Pay Online'
              aboutText='Book and make your payments online'
            />
          </Row>
        </CustomSection>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  openSignupModal,
  passMenuProps,
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
