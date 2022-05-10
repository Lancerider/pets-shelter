import React from 'react';
import './Navigation.scss';
import NavigationLink from "./NavigationLink";

const Navigation = ({  }) => <nav className='comp-navigation'>
  <ul>
    <NavigationLink name={'Home'} url={'/'} />
  </ul>
</nav>

export default Navigation;
