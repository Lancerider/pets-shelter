import React from 'react';

const NavigationLink = ({ name, url }) => <li className={'comp-navigation-link'}><a href={url}>{name}</a></li>

export default NavigationLink;
