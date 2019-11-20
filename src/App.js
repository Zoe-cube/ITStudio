import React, { Component, Fragment } from 'react'
import Header from './Header/Header.js'
import Body from './Body/Body.js'
import Container3 from './Body1/Container3'
import Footer from './Footer/Footer.js'

class App extends Component {
  render() { 
    return (
      <Fragment>
        <Header />
        <Body />
        <Container3 />
        <Footer />
      </Fragment>
      );
  }
}
 
export default App;