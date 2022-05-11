import React from 'react'
import { ReactComponent as NotFoundImage } from '../assets/images/404-error-page.svg'
import './style/NotFound.scss'

const NotFound = () => (
  <div className="NotFound">
    <NotFoundImage />
  </div>
)

export default NotFound