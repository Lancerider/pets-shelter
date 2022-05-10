import React from 'react';
import './NavigationLink.scss'

const NavigationLink = ({ name, url }) => <li className={'comp-navigation-link'}><a href={url}>{name}</a></li>

export default NavigationLink;
