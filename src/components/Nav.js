import React from 'react';
import '../styles/main.scss';

const Nav = () => {
  const toggleOpen = (e) => {
    const mobileNav = document.getElementById('mobile-nav');
    const menuBtn = document.getElementById('menu-btn');
    const body = document.body;

    mobileNav.classList.toggle('active');
    menuBtn.classList.toggle('open');
    body.classList.toggle('overflow-hidden');
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
          <a href='#about'>About</a>
        </li>
        <li className='navbar__links--link'>
          <a href='#projects'>Projects</a>
        </li>
        <li className='navbar__links--link'>
          <a href='#contact'>Contact</a>
        </li>
        <li className='navbar__links--link'>
          <a href='#resume'>
            <button className='btn-nav'>Resume</button>
          </a>
        </li>
      </ul>
      <ul className='navbar__links--mobile' id='mobile-nav'>
        <li className='navbar__links--mobile-link'>
          <a href='#about' onClick={toggleOpen}>
            About
          </a>
        </li>
        <li className='navbar__links--mobile-link'>
          <a href='#projects' onClick={toggleOpen}>
            Projects
          </a>
        </li>

        <li className='navbar__links--mobile-link'>
          <a href='#contact' onClick={toggleOpen}>
            Contact
          </a>
        </li>
        <li className='navbar__links--mobile-link'>
          <a href='#resume' onClick={toggleOpen}>
            <button className='btn-tertiary'>Resume</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
