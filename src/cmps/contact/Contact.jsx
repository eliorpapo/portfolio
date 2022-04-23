import './contact.scss'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'

export const Contact = () => {
  const form = useRef()

  const notify = () => toast.success('Email Sent Successfully')

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_mrsjp9h',
        'template_bauk9vz',
        form.current,
        'lqa0kpD2R8kTuq3S1'
      )
      .then(notify)

    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>eliorpapo3@gmail.com</h5>
            <a href='mailto:eliorpapo3@gmail.com' onClick={sendEmail}>
              Send a message
            </a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>052-8970398</h5>
            <a
              href='https://api.whatsapp.com/send?phone=+972528970398'
              target='__blank'
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          />
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  )
}
