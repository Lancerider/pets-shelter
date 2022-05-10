import React from 'react'
import NotFoundImage from '../assets/images/404-error-page.svg'
import './style/NotFound.scss'

const NotFound = () => (
  <div className="NotFound">
    <img src={ NotFoundImage } className="NotFound__image" alt="Pages Not Found"/>
  </div>
)

export default NotFound