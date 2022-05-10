import React from 'react';
import Navbar from './Navigation';
import './style/main.scss';

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar/>
      { props.children }
    </React.Fragment>
  )
}

export default Layout