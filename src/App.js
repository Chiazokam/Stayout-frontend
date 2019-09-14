import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Media from 'react-media';
import { Home } from './containers';
import News from './store/reduxSetupTestFiles/News';
import { MobileHeader, Dropdown, Logo, Hamburger } from './components/common';

class App extends Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  render() {
    const { isMenuOpen } = this.state;
    const { menuProps } = this.props;

    let dropdownMenu = 'dropdown-close';
    if (isMenuOpen) {
      dropdownMenu = 'dropdown-open';
    }

    return (
      <BrowserRouter>
        <MobileHeader className='mobile-header'>
          <Logo className='logo-mobile' />
          <Hamburger clicked={this.toggleMenu} />
        </MobileHeader>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/redux-test' component={News} />
        </Switch>
        <Media query='(max-width: 767px)'>
          {matches => (matches ? (
            <Dropdown
              menu={menuProps || []}
              className={`home-dropdown ${dropdownMenu}`}
            />
          ) : null)
          }
        </Media>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  menuProps: state.global.menuProps
});

export default connect(mapStateToProps)(App);
