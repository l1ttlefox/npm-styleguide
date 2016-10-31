import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import NavBar from './Menu';
import SubMenu from '../SubMenu';
import Content from '../Content';
import StyleGuide from '../StyleGuide';

class PageFrame extends Component {
  constructor() {
    super();
    this.state = {
      miniMenu: false,
    };
  }
  render() {
    return (
      <div className={`page-wrap${this.state.miniMenu ? ' menu-minified' : ''} clearfix`}>
        <Grid fluid>
          <NavBar
            miniMenu={this.state.miniMenu}
            minifyMenu={value => this.setState({ miniMenu: value })}
          />
        </Grid>
        <section className="page--content-wrap">
          <SubMenu />
          <Content>
            <StyleGuide />
          </Content>
        </section>
      </div>
    );
  }
}
export default PageFrame;

