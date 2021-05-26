import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Project = ({
  title,
  description,
  technologies,
  featured,
  github,
  link,
  id,
  screenshots,
  align,
}) => {
  return (
    <div className={align === 'left' ? 'project' : 'project-right'} id={id}>
      <div className={'project__first-column'}>
        <div
          className={
            align === 'left' ? 'project__header' : 'project-right__header'
          }>
          {featured && (
            <span
              className={
                align === 'left'
                  ? 'project__header--featured'
                  : 'project-right__header--featured'
              }>
              Featured Project
            </span>
          )}
          <h3
            className={
              align === 'left'
                ? 'project__header--title'
                : 'project-right__header--title'
            }>
            {title}
          </h3>
        </div>
        <div
          className={
            align === 'left'
              ? 'project__description'
              : 'project-right__description'
          }>
          {description}
        </div>
        <div
          className={
            align === 'left' ? 'project__skills' : 'project-right__skills'
          }>
          <ul>
            {technologies.map((tech, i) => {
              return <li key={JSON.stringify(tech)}>{tech}</li>;
            })}
          </ul>
        </div>
        <div
          className={
            align === 'left' ? 'project__icons' : 'project-right__icons'
          }>
          {github.exists && (
            <a href={github.link} target='_blank' rel='noreferrer'>
              <FontAwesomeIcon
                className={
                  align === 'left'
                    ? 'project__icons--icon'
                    : 'project-right__icons--icon'
                }
                icon={faGithub}
                color={'#dfdae0'}
                size={'2x'}
              />
            </a>
          )}
          {link && (
            <a href={link} target='_blank' rel='noreferrer'>
              <FontAwesomeIcon
                className={
                  align === 'left'
                    ? 'project__icons--icon'
                    : 'project-right__icons--icon'
                }
                icon={faExternalLinkAlt}
                color={'#dfdae0'}
                size={'2x'}
              />
            </a>
          )}
        </div>
      </div>
      {screenshots != false ? (
        <div
          className={
            align === 'left'
              ? 'project__screenshots'
              : 'project-right__screenshots'
          }>
          {screenshots.map((screenshot) => {
            return (
              <img
                key={JSON.stringify(screenshot)}
                src={screenshot.src}
                alt={screenshot.alt}
                className={screenshot.class}
              />
            );
          })}
        </div>
      ) : undefined}
    </div>
  );
};

export default Project;
