import React from 'react';
import NavigationLink from "./NavigationLink";
import './style/Navigation.scss';

const Navigation = ({  }) => <nav className='comp-navigation'>
  <ul>
    <NavigationLink name={'Home'} url={'/'} />
  </ul>
</nav>

export default Navigation;
