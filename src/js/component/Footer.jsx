import React from 'react'

const text = {
    description : "Copyright © Your Website 2022"
}

const Footer = () => {
  return (
    <div className="text-muted py-5">
      <div className="text-center p-3 fixed-bottom bg-dark">
        <p className="text-while">{text.description}</p>
      </div>
    </div>
  );
}:

export default Footer;