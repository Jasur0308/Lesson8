import './Navbar.css'
import loop from '../../images/loop.svg'
import filter from '../../images/filter.svg'
import like from '../../images/like.svg'
import notification from '../../images/notification.svg'
import settings from '../../images/settings.svg'
import profile from '../../images/profile.svg'

const Navbar = () => {

  return (
    <div className='navbar max-w-[1440px] m-0 mx-auto pl-[60px] pr-[32px] py-[40px]'>
        <div className="flex justify-between">
            <div className="navbar__left flex items-center gap-[64px]">
                <h3 className='logo'>morent</h3>
                <div className="search__input">
                    <div className="search__input__left">
                        <img src={loop} alt="" />
                        <input className='input w-full outline-none' type="text" placeholder='Search something here' />
                    </div>
                    <img className='filter' src={filter} alt="" />
                </div>
            </div>
            <div className="navbar__right flex gap-[20px] items-center">
                <img src={like} alt="" />
                <img src={notification} alt="" />
                <img src={settings} alt="" />
                <img src={profile} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Navbar