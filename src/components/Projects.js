import React from 'react';
import Project from './Project';
import filefireMobile from '../images/filefire-iphone-opt.png';
import filefireMacbook from '../images/filefire-macbook-opt.png';
import ccMacbook from '../images/cc-macbook-opt.png';
import ccMobile from '../images/cc-iphone-opt.png';
import portfolioMacbook from '../images/portfolio-macbook-opt.png';
import portfolioIphone from '../images/portfolio-iphone-opt.png';
import weathercatMacbook from '../images/weathercat-macbook-opt.png';
import teslaCloneIphone from '../images/tesla-clone-mobile.png';
import teslaCloneMacbook from '../images/tesla-clone-macbook.png';

const Projects = () => {
  return (
    <section className={'projects'} id='projects'>
      <div className='projects__header'>
        <h2 className={'projects__header--headline'}>Some Things I've Built</h2>
        <hr className='projects__header--accent-line' />
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
        title={'Tesla Clone'}
        align={'right'}
        id={'tesla-clone'}
        description={'Tesla clone built utilizing React and Styled Components.'}
        technologies={['Javascript', 'CSS3', 'React', 'Styled Components']}
        github={{
          exists: true,
          link: 'https://github.com/jbcortez/tesla-clone',
        }}
        link='https://eager-wright-21976a.netlify.app/'
        screenshots={[
          {
            src: teslaCloneMacbook,
            alt: 'Tesla Clone Screenshot for Desktop',
            class: 'project__screenshots--desktop',
          },
          {
            src: teslaCloneIphone,
            alt: 'Tesla Clone Screenshot for Mobile',
            class: 'project__screenshots--mobile',
          },
        ]}
      />
      <Project
        title={'WeatherCat'}
        align={'left'}
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
        align={'right'}
        description={
          'Website for a local non-profit built with WordPress. It was my first project, and what initially sparked my interest in web development.'
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
      {/* <Project
        title={'Portfolio'}
        id={'portfolio'}
        description={
          "My personal portfolio. I decided to use Gatsby because I've really been enjoying React, and Gatsby offered both performance and simplicity."
        }
        technologies={['React', 'Sass', 'Gatsby']}
        github={{
          exists: true,
          link: 'https://www.github.com/jbcortez/portfolio',
        }}
        screenshots={[
          {
            src: portfolioMacbook,
            alt: 'Porfolio macbook screenshot',
            class: 'project__screenshots--desktop',
          },
          {
            src: portfolioIphone,
            alt: 'Porfolio iphone screenshot',
            class: 'project__screenshots--mobile',
          },
        ]}
        align={'right'}
      /> */}
    </section>
  );
};

export default Projects;
