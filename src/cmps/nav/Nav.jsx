import './nav.scss'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

export const Nav = () => {
  const [activeNuv, setActiveNuv] = useState('#')
  return (
    <nav>
      <a
        href='#'
        onClick={() => setActiveNuv('#')}
        className={activeNuv === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNuv('about')}
        className={activeNuv === 'about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNuv('experience')}
        className={activeNuv === 'experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNuv('contact')}
        className={activeNuv === 'contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}
