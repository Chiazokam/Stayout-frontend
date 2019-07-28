import React, { Component } from 'react';
import { Row } from 'reactstrap';
import Media from 'react-media';
import { BackDrop, AboutBox } from '../../components/home';
import user from '../../assets/images/user.svg';
import team from '../../assets/images/team.svg';
import card from '../../assets/images/card.svg';
import {
  BackImage,
  Logo,
  MobileHeader,
  Hamburger,
  Button,
  CustomSection,
  ThinLine,
  Dropdown
} from '../../components/common';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      menu: ['Sign in']
    };
  }

  toggleMenu = () => {
    this.setState((prevState, props) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  }

  render() {
    const { isMenuOpen, menu } = this.state;
    let dropdownMenu = 'dropdown-close';
    if (isMenuOpen) {
      dropdownMenu = 'dropdown-open';
    }

    return (
      <React.Fragment>
        <BackDrop />
        <Logo className='logo' />
        <h3 className='nav-web-home'> Sign in </h3>

        <MobileHeader className='mobile-header'>
          <Logo className='logo-mobile' />
          <Hamburger
            clicked={this.toggleMenu}
          />
        </MobileHeader>
        <BackImage className='home-image' />

        <Button
          className='home-button'
        >
          Search Spaces
        </Button>
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

        <Media query='(max-width: 767px)'>
          {matches => (matches ? (
            <Dropdown
              menu={menu}
              className={`home-dropdown ${dropdownMenu}`}
            />
          ) : (
            null
          ))
          }
        </Media>

      </React.Fragment>
    );
  }
}

export default Home;
