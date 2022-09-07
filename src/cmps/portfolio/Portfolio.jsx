import './portfolio.scss'
import audiofly from '../../assets/audiofly.png'
import Bitcoin from '../../assets/Mister-Bitcoin.png'
import gericht from '../../assets/gericht-restaurant.png'
import netflix from '../../assets/netflix-clone.png'
import weather from '../../assets/weather-app.png'
import jobify from '../../assets/jobify.png'
export const Portfolio = () => {
  const items = [
    {
      desc: 'Audiofly - Spotify clone That enables shared hearing.',
      img: audiofly,
      git: 'https://github.com/Noamzil/AudioFly.git',
      live: 'https://audiofly.herokuapp.com',
    },

    {
      desc: 'Jobify - Simple way to keep your job application in order',
      img: jobify,
      git: 'https://github.com/eliorpapo/jobify',
      live: 'https://jobify-elior.herokuapp.com/',
    },

    {
      desc: 'Gerich-restaurant - Restaurant page UI example',
      img: gericht,
      git: 'https://github.com/eliorpapo/gerich-restaurant.git',
      live: 'https://eliorpapo.github.io/gerich-restaurant/',
    },
    {
      desc: 'Netflix Clone - The trailers for all Netflix Hits',
      img: netflix,
      git: 'https://github.com/eliorpapo/netflix-clone.git',
      live: 'https://eliorpapo.github.io/netflix-clone/',
    },

    {
      desc: 'Weather App - Check the weather around the world.',
      img: weather,
      git: 'https://github.com/eliorpapo/WeatherApp',
      live: 'https://eliorpapo.github.io/WeatherApp/',
    },

    {
      desc: 'Mr.Bitcoin - Bitcoin share App. People can send bitcoin to other contacts.',
      img: Bitcoin,
      git: 'https://github.com/eliorpapo/Mister-Bitcoin.git',
      live: 'https://eliorpapo.github.io/Mister-Bitcoin/',
    },
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {items.map(({ desc, git, img, live }) => {
          return (
            <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={img} alt='' />
              </div>
              <h3>{desc}</h3>
              <div className='portfolio__item-cta'>
                <a href={git} className='btn' target='__blank'>
                  GitHub
                </a>
                <a href={live} className='btn btn-primary' target='__blank'>
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
