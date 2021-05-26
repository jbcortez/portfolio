import React from 'react';
import '../styles/main.scss';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className='hero' id='hero'>
      <div className='hero__wrapper'>
        <h1 className='hero__headline'>Hello, I'm Justin.</h1>

        <h4 className='hero__sub-headline'>
          I have a passion for web{' '}
          <span className='hero__sub-headline--highlight'>development.</span>
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
        <Link
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-75}
          duration={500}
          delay={0}
          isDynamic={true}
          // onSetActive={this.handleSetActive}
          // onSetInactive={this.handleSetInactive}
          ignoreCancelEvents={false}>
          <button className='btn-primary'>View Projects</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
