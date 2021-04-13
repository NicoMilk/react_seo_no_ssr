import React from 'react';
import Helmet from 'react-helmet';

const Contact = () => {
  return(
    <div>
      <Helmet>
        <title>
          Contact page title by Helmet
        </title>
        <meta
        name='description'
        content='Contact page description by Helmet'
        />
      </Helmet>

      <h1>Section Contact</h1>
    </div>
  )
}

export default Contact;