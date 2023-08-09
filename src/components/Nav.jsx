import '../scss/nav.scss'
import Auth from './auth/Auth'
import logo from '../assets/logo.svg'
import data from '../data/navigasyon.json'
import CheckLanguage from './language/CheckLanguage'
const NavComponent = () => {
  return (
    <header className='header-container'>
      <div>
        <img src={logo} alt="" />
      </div>
      <section className='nav-container'>
        <nav className='nav-group'>
          {data && data.map((item, key) => (
            <a key={key} href={item.url}>
              {item.urlName}
            </a>
          ))}
        </nav>
        <div className='user-process'>
          <Auth />
          <CheckLanguage />
        </div>
      </section>
    </header>
  )
}

export default NavComponent
