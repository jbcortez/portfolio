import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Me from '../images/me.jpeg';

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='about__left'>
        <div className='about__header'>
          <h2 className='about__header--headline'>About Me</h2>

          <hr className='about__header--accent-line' />
        </div>

        <p className='about__text'>
          Before the pandemic hit, I worked in technical services for the Santa
          Cruz Beach Boardwalk. The theme park industry was hit particularly
          hard, and fortunately I was laid off. I say fortunately, because it
          lead me down a better path. I saw this as an opportunity to learn and
          advance my skills, and embark on a new career in web development.
        </p>

        <p className='about__text'>
          Here are some skills I’ve aquired along the way:
        </p>
        <div className='about__skills'>
          <div className='about__skills--left'>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faCode}
                  className={'about__skills--icon'}
                />
                Javascript
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCode}
                  className={'about__skills--icon'}
                />
                React
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCode}
                  className={'about__skills--icon'}
                />
                HTML5
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCode}
                  className={'about__skills--icon'}
                />
                CSS3
              </li>
            </ul>
          </div>
          <div className='about__skills--right'>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faCode}
                  className={'about__skills--icon'}
                />
                Sass
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCode}
                  className={'about__skills--icon'}
                />
                Git
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCode}
                  className={'about__skills--icon'}
                />
                Firebase
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCode}
                  className={'about__skills--icon'}
                />
                Gatsby
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='about__right'>
        <div className='about__img'>
          <img src={Me} alt='Justin Cortez' />
        </div>
      </div>
    </section>
  );
};

export default About;
