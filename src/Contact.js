import React from 'react';
import Icon from './Icon.js'

const Contact = ({icons}) => {
  return (
    <div>
      <div id="last">
        <h3 className="contact-headline">Contact Me!</h3>
        {icons.map((icon) => {
          return <Icon key={icon.url} href={icon.href} url={icon.url} className={"overlay icons"}/>
        })}
        <div className="contact-text">
          <a href="mailto:hoomisha@gmail.com" id="email">hoomisha@gmail.com</a>
        </div>
      </div>
      <div className="bar"></div>
    </div>
  )
}

export default Contact;
