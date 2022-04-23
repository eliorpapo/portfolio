import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/elior-papo-a54807228/'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin className='header-social' />
      </a>
      <a href='https://github.com/eliorpapo' targrt='_blank'>
        <FaGithub className='header-social' />
      </a>
    </div>
  )
}
