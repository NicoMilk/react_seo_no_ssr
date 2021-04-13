import React from 'react';
import Helmet from 'react-helmet';

const Home = () => {

  function handleClick () {
  }

  return(
    <div>
      <Helmet>
        <title>
          Home page title by Helmet
        </title>
        <meta
        name='description'
        content='Home page description by Helmet'
        />
      </Helmet>

      <h1>Bonjour Monde !</h1>
      <p>ceci est la page d'accueil du site</p>
      <div>
        <button type="button" onClick={handleClick} style={{marginBottom:20}}>
          Image suivante
        </button>
      </div>

      <div>
        <img src="https://source.unsplash.com/random/400x300" alt='unsplash random'/>
      </div>

    </div>
  )
}

export default Home;