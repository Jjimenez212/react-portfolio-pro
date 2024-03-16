import AboutImage from '../../assets/React-master.jpg';
import CV from '../../assets/Coding Resume(update).pdf';
import {HiDownload} from 'react-icons/hi';
import data from './data';
import Card from '../../components/Card';
import './About.css';
import AOS from 'aos';

const About = () => {
  return (
    <section id='about' data-aos="flip-up">
      <div className='container about__container'>
        <div className='about__left'>
          <div className='about__portrait'>
            <img src={AboutImage} alt='About Image' />
          </div>
        </div>
        <div className='about__right'>
          <h2>About Me</h2>
          <div className='about__cards'>
            {
              data.map(item => (
                <Card key={item.id} className='about__card'>
                  <span className='about__card-icon'></span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
          Building projects my clients love have always been my passion.
          Being in the web development industry for over 3 years and serving
          more than 70 happy worldwide, I'm always motivated to do more!
          </p>
          <p>
          Hi, my name is Juan Miguel Jimenez from USA. I'm a full-stack web
          developer on my way to getting a Bachelors degree in Computer Science.
          My top priority is to get your business online the right way, giving you
          industry-standard design and all the functionality you need to operate
          smoothly online. Get in touch today with the details of your projects
          let's get started! Check out my resume below!
          </p>
          <a href={CV} download className='btn primary'>download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About