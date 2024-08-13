import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer__top flex justify-between">
                <div className="footer__left flex flex-col gap-[16px]">
                    <h3 className="footer__title">morent</h3>
                    <p className='footer__text'>Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                <div className="footer__right flex gap-[60px] items-center">
                    <div className="footer__col flex flex-col gap-[24px]">
                        <h4 className='list__title'>About</h4>
                        <ul className="footer__list flex flex-col gap-[20px]">
                            <li className="footer__list__item"><a href="#" className="footer__item__link">How it works</a></li>
                            <li className="footer__list__item"><a href="#" className="footer__item__link">Featured</a></li>
                            <li className="footer__list__item"><a href="#" className="footer__item__link">Partnership</a></li>
                            <li className="footer__list__item"><a href="#" className="footer__item__link">Bussiness Relation</a></li>
                        </ul>
                    </div>
                    <div className="footer__col flex flex-col gap-[24px]">
                        <h4 className='list__title'>Community</h4>
                        <ul className="footer__list flex flex-col gap-[20px]">
                            <li className="footer__list__item"><a href="#" className="footer__item__link">Events</a></li>
                            <li className="footer__list__item"><a href="#" className="footer__item__link">Blog</a></li>
                            <li className="footer__list__item"><a href="#" className="footer__item__link">Podcast</a></li>
                            <li className="footer__list__item"><a href="#" className="footer__item__link">Invite a friend</a></li>
                        </ul>
                    </div>
                    <div className="footer__col flex flex-col gap-[24px]">
                        <h4 className='list__title'>Socials</h4>
                        <ul className="footer__list flex flex-col gap-[20px]">
                            <li className="footer__list__item"><a href="#" className="footer__item__link">Discord</a></li>
                            <li className="footer__list__item"><a href="#" className="footer__item__link">Instagram</a></li>
                            <li className="footer__list__item"><a href="#" className="footer__item__link">Twitter</a></li>
                            <li className="footer__list__item"><a href="#" className="footer__item__link">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="footer__bottom pb-[60px] pt-[36px] flex justify-between">
                <p className='footer__bottom__left'>©2022 MORENT. All rights reserved</p>
                <div className="footer__bottom__right flex items-center gap-[60px]">
                    <a href="#" className="footer__bottom__right__link">Privacy & Policy</a>
                    <a href="#" className="footer__bottom__right__link">Terms & Condition</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer