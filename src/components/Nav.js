import React from 'react';
import '../styles/main.scss';
import { Link } from 'react-scroll';
import resume from '../files/justin_cortez_resume.pdf';

const Nav = () => {
  const toggleOpen = (e) => {
    const mobileNav = document.getElementById('mobile-nav');
    const menuBtn = document.getElementById('menu-btn');
    const body = document.body;
    const mobileLinks = document.getElementsByClassName(
      'navbar__links--mobile-link'
    );

    mobileNav.classList.toggle('active');
    menuBtn.classList.toggle('open');
    body.classList.toggle('overflow-hidden');

    let delay = 0;

    for (let link of mobileLinks) {
      if (menuBtn.classList.contains('open')) {
        link.style.animation = 'fadeIn 0.5s ease-in-out';
        link.style.animationFillMode = 'both';
        delay += 0.2;
        link.style.animationDelay = delay + 's';
      } else {
        link.style.animation = 'none';
        link.style.opacity = '0';
      }
    }
  };

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <span className={'navbar__logo--justin'}>Justin.</span>Cortez
      </div>
      <div
        className='navbar__menu-btn'
        id='menu-btn'
        onClick={toggleOpen}
        aria-label={'menu'}
        role={'button'}
        tabIndex={'0'}>
        <div className='navbar__menu-btn--hamburger'></div>
      </div>
      <ul className='navbar__links'>
        <li className='navbar__links--link'>
          <Link
            activeClass='active'
            to='about'
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
            About
          </Link>
        </li>
        <li className='navbar__links--link'>
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
            Projects
          </Link>
        </li>
        <li className='navbar__links--link'>
          <Link
            activeClass='active'
            to='contact'
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
            Contact
          </Link>
        </li>
        <li className='navbar__links--link'>
          <a href={resume} target='_blank' rel='noreferrer'>
            <button className='btn-nav'>Resume</button>
          </a>
        </li>
      </ul>
      <ul className='navbar__links--mobile' id='mobile-nav'>
        <li className='navbar__links--mobile-link'>
          <Link
            onClick={toggleOpen}
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-20}
            duration={500}
            delay={250}
            isDynamic={true}
            // onSetActive={this.handleSetActive}
            // onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}>
            About
          </Link>
        </li>
        <li className='navbar__links--mobile-link'>
          <Link
            onClick={toggleOpen}
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-20}
            duration={500}
            delay={250}
            isDynamic={true}
            // onSetActive={this.handleSetActive}
            // onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}>
            Projects
          </Link>
        </li>

        <li className='navbar__links--mobile-link'>
          <Link
            onClick={toggleOpen}
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-20}
            duration={500}
            delay={250}
            isDynamic={true}
            // onSetActive={this.handleSetActive}
            // onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}>
            Contact
          </Link>
        </li>
        <li className='navbar__links--mobile-link'>
          <a
            href={resume}
            onClick={toggleOpen}
            target='_blank'
            rel='noreferrer'>
            <button className='btn-tertiary'>Resume</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
