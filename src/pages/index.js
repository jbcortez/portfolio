import * as React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import '../styles/main.scss';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const IndexPage = () => {
  return (
    <div>
      <Nav />
      <div className={'container'}>
        <Helmet>
          <title>Justin Cortez</title>
          <link
            rel='stylesheet'
            href='//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack-subset.css'
          />

          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,900&display=swap'
            rel='stylesheet'
          />
        </Helmet>

        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>

      <div className='margin__contact--email'>
        <span className='margin__contact--email--text'>
          <a
            href='mailto:justin.b.cortez@gmail.com'
            target='_blank'
            rel='noreferrer'>
            justin.b.cortez@gmail.com
          </a>
        </span>
        <hr className={'margin__contact--email--line'} />
      </div>
      <div className='margin__contact--social'>
        <a
          href='https://www.github.com/jbcortez'
          target='_blank'
          rel='noreferrer'>
          <FontAwesomeIcon
            className='margin__contact--social--icon'
            icon={faGithub}
            size={'2x'}
          />
        </a>
        <a
          href='https://www.linkedin.com/in/justin-cortez-341765146/'
          target='_blank'
          rel='noreferrer'>
          <FontAwesomeIcon
            className='margin__contact--social--icon'
            icon={faLinkedin}
            size={'2x'}
          />
        </a>

        <hr className={'margin__contact--social--line'} />
      </div>
    </div>
  );
};

export default IndexPage;
