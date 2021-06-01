import * as React from 'react';
import { useEffect } from 'react';
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
  const logPageOffset = () => {
    const about = document.getElementById('about');
    const projects = document.getElementById('projects');
    const contact = document.getElementById('contact');

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > about.offsetTop - (window.innerHeight - 150)) {
        about.style.animation = 'fadeIn 0.5s ease-in-out';
        about.style.animationFillMode = 'forwards';
      }
      if (
        window.pageYOffset >
        projects.offsetTop - (window.innerHeight - 150)
      ) {
        projects.style.animation = 'fadeIn 0.5s ease-in-out';
        projects.style.animationFillMode = 'forwards';
      }
      if (window.pageYOffset > contact.offsetTop - (window.innerHeight - 150)) {
        contact.style.animation = 'fadeIn 0.5s ease-in-out';
        contact.style.animationFillMode = 'forwards';
      }
    });
  };

  useEffect(() => {
    logPageOffset();
  }, []);

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
          rel='noreferrer'
          aria-label='github'>
          <FontAwesomeIcon
            className='margin__contact--social--icon'
            icon={faGithub}
            size={'2x'}
          />
        </a>
        <a
          href='https://www.linkedin.com/in/justin-cortez-341765146/'
          target='_blank'
          rel='noreferrer'
          aria-label='linkedin'>
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
