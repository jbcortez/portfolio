import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
  return (
    <section className={'contact'} id='contact'>
      <div className='contact__header'>
        <div className='contact__header--headline'>Get In Touch</div>
        <div className='contact__header--accent-line'>
          <hr />
        </div>
      </div>

      <div className='contact__secondary'>
        <p className='contact__secondary--text'>
          I'm currently looking for a full-time, front-end position. If you're
          interested in working together or have any questions, feel free to
          send me an email.
        </p>
        <a href='mailto:justin.b.cortez@gmail.com' rel='noreferrer'>
          <button className='contact__secondary--btn btn-secondary'>
            Email Me
          </button>
        </a>
      </div>
      <div className='contact__social'>
        <a
          href='https://www.github.com/jbcortez'
          target='_blank'
          rel='noreferrer'>
          <FontAwesomeIcon
            className={'contact__social--icon'}
            icon={faGithub}
            size={'3x'}
          />
        </a>
        <a
          href='https://www.linkedin.com/in/justin-cortez-341765146/'
          target='_blank'
          rel='noreferrer'>
          <FontAwesomeIcon
            className={'contact__social--icon'}
            icon={faLinkedin}
            size={'3x'}
          />
        </a>
      </div>
      <div className='contact__footer'>
        <FontAwesomeIcon
          className={'contact__footer--icon'}
          icon={faEnvelope}
          size={'2x'}
        />

        <hr className='contact__footer--accent-line' />

        <div className='contact__footer--text'>
          <a href='mailto:justin.b.cortez@gmail.com' rel='noreferrer'>
            justin.b.cortez@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
