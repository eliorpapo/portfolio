import CV from '../../assets/CV.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>
        Download CV
      </a>
      <a href='' className='btn btn-primary'>
        Let's Talk
      </a>
    </div>
  )
}
