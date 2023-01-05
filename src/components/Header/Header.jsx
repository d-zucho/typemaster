// import { Logo } from '../../assets/logo.svg'

import { ReactComponent as Logo } from '../../assets/logo.svg'
// import '../../styles/header.style.css'

import './header.style.css'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <Logo />
        <button className='btn btn-2'>Pre-Order Now</button>
      </div>
    </header>
  )
}

export default Header
