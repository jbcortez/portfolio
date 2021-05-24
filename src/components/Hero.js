import React from 'react';
import '../styles/main.scss';

const Hero = () => {
  return (
    <section className='hero' id='hero'>
      <div className='hero__wrapper'>
        <h1 className='hero__headline'>Hello, I'm Justin.</h1>

        <h4 className='hero__sub-headline'>
          I have a passion for web{' '}
          <div className='hero__sub-headline--highlight-container'>
            development.<span className='hero__sub-headline--highlight'></span>
          </div>
        </h4>

        <p className='hero__text'>
          I am a front end developer based in California. I’m always up for a
          challenge, and I’m constantly learning.{' '}
          <a
            href='mailto:justin.b.cortez@gmail.com'
            rel='noreferrer'
            className={'hero__text--link'}>
            Let’s work together
          </a>
          .
        </p>
        <a href='#projects'>
          <button className='btn-primary'>View Projects</button>
        </a>
        <div className='hero__scroll-icon--container'>
          {
            <a href='#about'>
              <svg
                className='hero__scroll-icon'
                width='43'
                height='73'
                viewBox='0 0 43 73'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect
                  id='rectangle'
                  x='1'
                  y='1'
                  width='41'
                  height='71'
                  rx='20.5'
                  stroke='#24e1d8'
                  strokeWidth='2'
                />
                <circle id='circle' cx='22' cy='21' r='16' fill='#24e1d8' />
              </svg>
            </a>
          }
        </div>
      </div>
    </section>
  );
};

export default Hero;
