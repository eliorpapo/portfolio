import './footer.scss'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Elior Papo
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Skills</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a
          href='https://www.facebook.com/profile.php?id=100017415720086'
          target='__blank'
        >
          <FaFacebookF />
        </a>
        <a href='https://www.instagram.com/eliorpapo/' target='__blank'>
          <FiInstagram />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Elior Papo. All rights reserved</small>
      </div>
    </footer>
  )
}
