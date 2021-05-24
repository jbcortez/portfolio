import React from 'react';
import Project from './Project';
import filefireMobile from '../images/filefire-iphone.png';
import filefireMacbook from '../images/filefire-macbook.png';
import ccMacbook from '../images/cc-macbook.png';
import ccMobile from '../images/cc-iphone.png';
import portfolioMacbook from '../images/portfolio-macbook.png';
import weathercatMacbook from '../images/weathercat-macbook.png';

const Projects = () => {
  return (
    <section className={'projects'} id='projects'>
      <div className='projects__header'>
        <h2 className={'projects__header--headline'}>Some Things I've Built</h2>
        <span className='projects__header--accent-line'>
          <hr />
        </span>
      </div>
      <Project
        title={'FileFire'}
        align={'left'}
        description={
          'FileFire is a cloud-storage application that was build using React and Firebase. It was both a challenging and enlightening project. It pushed me out of my comfort zone and the knowledge I’ve gained is invaluable. '
        }
        technologies={['React', 'Firebase', 'Sass']}
        featured={true}
        github={{ exists: true, link: 'https://github.com/jbcortez/filefire' }}
        link='https://filefire-5574a.web.app'
        id={'filefire'}
        screenshots={[
          {
            src: filefireMacbook,
            alt: 'FileFire screenshot on macbook',
            class: 'project__screenshots--desktop',
          },
          {
            src: filefireMobile,
            alt: 'FileFire screenshot on iphone',
            class: 'project__screenshots--mobile',
          },
        ]}
      />
      <Project
        title={'WeatherCat'}
        align={'right'}
        id={'weathercat'}
        description={
          'A simple weather application that queries the OpenWeather API. On every load, it also receives and displays a random picture of a cat from the Unsplash API.'
        }
        technologies={[
          'Javascript',
          'CSS3',
          'HTML5',
          'Openweather API',
          'Unsplash API',
        ]}
        github={{
          exists: true,
          link: 'https://github.com/jbcortez/weathercat',
        }}
        link='#'
        screenshots={[
          {
            src: weathercatMacbook,
            alt: 'WeatherCat screenshot macbook',
            class: 'project__screenshots--desktop',
          },
        ]}
      />
      <Project
        title={'Coast Connect'}
        id={'coast-connect'}
        align={'left'}
        description={
          'This is a website for a local non-profit. It was my first project, and what initially sparked my interest in web development.'
        }
        technologies={['Wordpress', 'CSS3']}
        github={{ exists: false }}
        link='https://www.coastconnect.org'
        screenshots={[
          {
            src: ccMacbook,
            alt: 'Coast Connect macbook screenshot',
            class: 'project__screenshots--desktop',
          },
          {
            src: ccMobile,
            alt: 'Coast Connect iphone screenshot',
            class: 'project__screenshots--mobile',
          },
        ]}
      />
      <Project
        title={'Portfolio'}
        id={'portfolio'}
        description={
          'My personal portfolio. The design was inspired by Brittany Chiang. Built using Gatsby.'
        }
        technologies={['React', 'Sass', 'Gatsby']}
        github={{
          exists: true,
          link: 'https://www.github.com/jbcortez/portfolio',
        }}
        link='https://www.justincortez.dev'
        screenshots={[
          {
            src: portfolioMacbook,
            alt: 'Porfolio macbook screenshot',
            class: 'project__screenshots--desktop',
          },
        ]}
        align={'right'}
      />
    </section>
  );
};

export default Projects;
