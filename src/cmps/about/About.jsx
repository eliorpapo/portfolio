import './about.scss'
import ME from '../../assets/learn.png'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='me2' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Looking For My First Opportunity</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10 + Completed</small>
            </article>
          </div>

          <p>
            I'm a Full-Stack Web Developer specializing in React, Vue.JS
            Node.JS, SASS and much more. I'm looking for my next challenge as a
            Full-Stack Developer. Eager to face complex tasks and find
            out-of-the-box solutions..
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}
