import './hero.style.css'
import HeroDesktop from '../../assets/heroDesktop.png'

const Hero = () => {
  return (
    <main>
      <div className='wrapper'>
        <div className='hero__container'>
          <div className='hero__container__col--left'>
            <h1 className='hero-title'>Typemaster Keyboard</h1>
            <p>
              Improve your productivity and gaming without breaking the bank.
              Upgrade to a high quality mechanical typing experience.
            </p>

            <div className='hero__button'>
              <button className='btn btn-1'>Pre-Order Now</button>
            </div>
          </div>
          <div className='hero__container__col--right'>
            <img src={HeroDesktop} alt='TypeMaster Keyboard' />
          </div>
        </div>
      </div>
    </main>
  )
}
export default Hero
