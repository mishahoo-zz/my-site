import React from 'react';

const Icon = ({href, url, className}) => {
  return (
    <a href={href}>
      <img className={className} src={url} alt="icon" />
    </a>
  )
}

export default Icon;
