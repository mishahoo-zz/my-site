import React from 'react';
import './Icon.css'

const Icon = ({href, url, className}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img className={className} src={url} alt="icon" />
    </a>
  )
}

export default Icon;
