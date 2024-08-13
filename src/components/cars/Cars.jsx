import './Cars.css'
import redHeart from '../../images/red-heart.svg'
import heart from '../../images/heart.svg'
import car1 from '../../images/car-1.png'
import car2 from '../../images/car-2.png'
import car3 from '../../images/car-3.png'
import car4 from '../../images/car-4.png'
import car5 from '../../images/car-5.png'
import car6 from '../../images/car-6.png'
import car7 from '../../images/car-7.png'
import car8 from '../../images/car-8.png'
import car9 from '../../images/car-9.png'
import gas from '../../images/gas.svg'
import manual from '../../images/manual.svg'
import people from '../../images/people.svg'
import { Button } from 'antd';

const Cars = () => {
  return (
    <div className='cars'>
        <div className="container">
            <div className="cars__top">
                <h5 className='title'>Popular Car</h5>
                <a className='cars__link' href="#">View All</a>
            </div>
            <div className="cars__cards">
                <div className='card'>
                    <div className="card__top">
                        <div className="card__top__content">
                            <h4 className='top__title'>Koenigsegg</h4>
                            <span className='top__text'>Sport</span>
                        </div>
                        <img src={redHeart} alt="" />
                    </div>
                    <div className="car__img mt-[64px] flex justify-center">
                        <img src={car1} alt="" />
                    </div>
                    <div className="card__extra mt-[64px] flex gap-[16px]">
                        <div className="extra flex items-center gap-[6px]">
                            <img src={gas} alt="" />
                            <span className="description">90L</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={manual} alt="" />
                            <span className="description">Manual</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={people} alt="" />
                            <span className="description">2 People</span>
                        </div>
                    </div>
                    <div className="card__bottom mt-[24px] flex items-center justify-between">
                        <div className="bottom__content flex items-center">
                            <h4 className="price">$99.00/</h4>
                            <span className='day'>day</span>
                        </div>
                        <Button className='bottom__btn' type="primary">Rent Now</Button>
                    </div>
                </div>
                <div className='card'>
                    <div className="card__top">
                        <div className="card__top__content">
                            <h4 className='top__title'>Nissan GT - R</h4>
                            <span className='top__text'>Sport</span>
                        </div>
                        <img src={heart} alt="" />
                    </div>
                    <div className="car__img mt-[64px] flex justify-center">
                        <img src={car3} alt="" />
                    </div>
                    <div className="card__extra mt-[64px] flex gap-[16px]">
                        <div className="extra flex items-center gap-[6px]">
                            <img src={gas} alt="" />
                            <span className="description">80L</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={manual} alt="" />
                            <span className="description">Manual</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={people} alt="" />
                            <span className="description">2 People</span>
                        </div>
                    </div>
                    <div className="card__bottom mt-[24px] flex items-center justify-between">
                        <div className="bottom__content flex flex-col gap-[4px]">
                            <div className="price__content flex items-center w-full">
                                <h4 className="price">$80.00/</h4>
                                <span className='day'>day</span>
                            </div>
                            <s className="old__price">$100.00</s>
                        </div>
                        <Button className='bottom__btn' type="primary">Rent Now</Button>
                    </div>
                </div>
                <div className='card'>
                    <div className="card__top">
                        <div className="card__top__content">
                            <h4 className='top__title'>Rolls - Royce</h4>
                            <span className='top__text'>Sedan</span>
                        </div>
                        <img src={redHeart} alt="" />
                    </div>
                    <div className="car__img mt-[64px] flex justify-center">
                        <img src={car2} alt="" />
                    </div>
                    <div className="card__extra mt-[64px] flex gap-[16px]">
                        <div className="extra flex items-center gap-[6px]">
                            <img src={gas} alt="" />
                            <span className="description">70L</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={manual} alt="" />
                            <span className="description">Manual</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={people} alt="" />
                            <span className="description">4 People</span>
                        </div>
                    </div>
                    <div className="card__bottom mt-[24px] flex items-center justify-between">
                        <div className="bottom__content flex items-center">
                            <h4 className="price">$96.00/</h4>
                            <span className='day'>day</span>
                        </div>
                        <Button className='bottom__btn' type="primary">Rent Now</Button>
                    </div>
                </div>
                <div className='card'>
                    <div className="card__top">
                        <div className="card__top__content">
                            <h4 className='top__title'>Nissan GT - R</h4>
                            <span className='top__text'>Sport</span>
                        </div>
                        <img src={heart} alt="" />
                    </div>
                    <div className="car__img mt-[64px] flex justify-center">
                        <img src={car3} alt="" />
                    </div>
                    <div className="card__extra mt-[64px] flex gap-[16px]">
                        <div className="extra flex items-center gap-[6px]">
                            <img src={gas} alt="" />
                            <span className="description">80L</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={manual} alt="" />
                            <span className="description">Manual</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={people} alt="" />
                            <span className="description">2 People</span>
                        </div>
                    </div>
                    <div className="card__bottom mt-[24px] flex items-center justify-between">
                        <div className="bottom__content flex flex-col gap-[4px]">
                            <div className="price__content flex items-center w-full">
                                <h4 className="price">$80.00/</h4>
                                <span className='day'>day</span>
                            </div>
                            <s className="old__price">$100.00</s>
                        </div>
                        <Button className='bottom__btn' type="primary">Rent Now</Button>
                    </div>
                </div>
            </div>
            <div className="cars__top mt-[32px]">
                <h5 className='title next'>Recommendation Car</h5>
            </div>
            <div className="cars__cards">
            <div className='card'>
                    <div className="card__top">
                        <div className="card__top__content">
                            <h4 className='top__title'>All New Rush</h4>
                            <span className='top__text'>SUV</span>
                        </div>
                        <img src={heart} alt="" />
                    </div>
                    <div className="car__img mt-[64px] flex justify-center">
                        <img src={car4} alt="" />
                    </div>
                    <div className="card__extra mt-[64px] flex gap-[16px]">
                        <div className="extra flex items-center gap-[6px]">
                            <img src={gas} alt="" />
                            <span className="description">70L</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={manual} alt="" />
                            <span className="description">Manual</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={people} alt="" />
                            <span className="description">6 People</span>
                        </div>
                    </div>
                    <div className="card__bottom mt-[24px] flex items-center justify-between">
                        <div className="bottom__content flex flex-col gap-[4px]">
                            <div className="price__content flex items-center w-full">
                                <h4 className="price">$72.00/</h4>
                                <span className='day'>day</span>
                            </div>
                            <s className="old__price">$80.00</s>
                        </div>
                        <Button className='bottom__btn' type="primary">Rent Now</Button>
                    </div>
                </div>
                <div className='card'>
                    <div className="card__top">
                        <div className="card__top__content">
                            <h4 className='top__title'>CR  - V</h4>
                            <span className='top__text'>SUV</span>
                        </div>
                        <img src={redHeart} alt="" />
                    </div>
                    <div className="car__img mt-[64px] flex justify-center">
                        <img src={car5} alt="" />
                    </div>
                    <div className="card__extra mt-[64px] flex gap-[16px]">
                        <div className="extra flex items-center gap-[6px]">
                            <img src={gas} alt="" />
                            <span className="description">80L</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={manual} alt="" />
                            <span className="description">Manual</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={people} alt="" />
                            <span className="description">6 People</span>
                        </div>
                    </div>
                    <div className="card__bottom mt-[24px] flex items-center justify-between">
                        <div className="bottom__content flex items-center">
                            <h4 className="price">$80.00/</h4>
                            <span className='day'>day</span>
                        </div>
                        <Button className='bottom__btn' type="primary">Rent Now</Button>
                    </div>
                </div>
                <div className='card'>
                    <div className="card__top">
                        <div className="card__top__content">
                            <h4 className='top__title'>All New Terios</h4>
                            <span className='top__text'>SUV</span>
                        </div>
                        <img src={heart} alt="" />
                    </div>
                    <div className="car__img mt-[64px] flex justify-center">
                        <img src={car6} alt="" />
                    </div>
                    <div className="card__extra mt-[64px] flex gap-[16px]">
                        <div className="extra flex items-center gap-[6px]">
                            <img src={gas} alt="" />
                            <span className="description">90L</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={manual} alt="" />
                            <span className="description">Manual</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={people} alt="" />
                            <span className="description">6 People</span>
                        </div>
                    </div>
                    <div className="card__bottom mt-[24px] flex items-center justify-between">
                        <div className="bottom__content flex items-center">
                            <h4 className="price">$74.00/</h4>
                            <span className='day'>day</span>
                        </div>
                        <Button className='bottom__btn' type="primary">Rent Now</Button>
                    </div>
                </div>
                <div className='card'>
                    <div className="card__top">
                        <div className="card__top__content">
                            <h4 className='top__title'>CR  - V</h4>
                            <span className='top__text'>SUV</span>
                        </div>
                        <img src={redHeart} alt="" />
                    </div>
                    <div className="car__img mt-[64px] flex justify-center">
                        <img src={car7} alt="" />
                    </div>
                    <div className="card__extra mt-[64px] flex gap-[16px]">
                        <div className="extra flex items-center gap-[6px]">
                            <img src={gas} alt="" />
                            <span className="description">80L</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={manual} alt="" />
                            <span className="description">Manual</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={people} alt="" />
                            <span className="description">6 People</span>
                        </div>
                    </div>
                    <div className="card__bottom mt-[24px] flex items-center justify-between">
                        <div className="bottom__content flex items-center">
                            <h4 className="price">$80.00/</h4>
                            <span className='day'>day</span>
                        </div>
                        <Button className='bottom__btn' type="primary">Rent Now</Button>
                    </div>
                </div>
                <div className='card'>
                    <div className="card__top">
                        <div className="card__top__content">
                            <h4 className='top__title'>MG ZX Exclusice</h4>
                            <span className='top__text'>Hatchback</span>
                        </div>
                        <img src={redHeart} alt="" />
                    </div>
                    <div className="car__img mt-[64px] flex justify-center">
                        <img src={car8} alt="" />
                    </div>
                    <div className="card__extra mt-[64px] flex gap-[16px]">
                        <div className="extra flex items-center gap-[6px]">
                            <img src={gas} alt="" />
                            <span className="description">70L</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={manual} alt="" />
                            <span className="description">Manual</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={people} alt="" />
                            <span className="description">4 People</span>
                        </div>
                    </div>
                    <div className="card__bottom mt-[24px] flex items-center justify-between">
                        <div className="bottom__content flex flex-col gap-[4px]">
                            <div className="price__content flex items-center w-full">
                                <h4 className="price">$76.00/</h4>
                                <span className='day'>day</span>
                            </div>
                            <s className="old__price">$80.00</s>
                        </div>
                        <Button className='bottom__btn' type="primary">Rent Now</Button>
                    </div>
                </div>
                <div className='card'>
                    <div className="card__top">
                        <div className="card__top__content">
                            <h4 className='top__title'>New MG ZS</h4>
                            <span className='top__text'>SUV</span>
                        </div>
                        <img src={heart} alt="" />
                    </div>
                    <div className="car__img mt-[64px] flex justify-center">
                        <img src={car9} alt="" />
                    </div>
                    <div className="card__extra mt-[64px] flex gap-[16px]">
                        <div className="extra flex items-center gap-[6px]">
                            <img src={gas} alt="" />
                            <span className="description">80L</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={manual} alt="" />
                            <span className="description">Manual</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={people} alt="" />
                            <span className="description">6 People</span>
                        </div>
                    </div>
                    <div className="card__bottom mt-[24px] flex items-center justify-between">
                        <div className="bottom__content flex items-center">
                            <h4 className="price">$80.00/</h4>
                            <span className='day'>day</span>
                        </div>
                        <Button className='bottom__btn' type="primary">Rent Now</Button>
                    </div>
                </div>
                <div className='card'>
                    <div className="card__top">
                        <div className="card__top__content">
                            <h4 className='top__title'>MG ZX Excite</h4>
                            <span className='top__text'>Hatchback</span>
                        </div>
                        <img src={redHeart} alt="" />
                    </div>
                    <div className="car__img mt-[64px] flex justify-center">
                        <img src={car8} alt="" />
                    </div>
                    <div className="card__extra mt-[64px] flex gap-[16px]">
                        <div className="extra flex items-center gap-[6px]">
                            <img src={gas} alt="" />
                            <span className="description">90L</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={manual} alt="" />
                            <span className="description">Manual</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={people} alt="" />
                            <span className="description">4 People</span>
                        </div>
                    </div>
                    <div className="card__bottom mt-[24px] flex items-center justify-between">
                        <div className="bottom__content flex items-center">
                            <h4 className="price">$74.00/</h4>
                            <span className='day'>day</span>
                        </div>
                        <Button className='bottom__btn' type="primary">Rent Now</Button>
                    </div>
                </div>
                <div className='card'>
                    <div className="card__top">
                        <div className="card__top__content">
                            <h4 className='top__title'>New MG ZS</h4>
                            <span className='top__text'>SUV</span>
                        </div>
                        <img src={heart} alt="" />
                    </div>
                    <div className="car__img mt-[64px] flex justify-center">
                        <img src={car9} alt="" />
                    </div>
                    <div className="card__extra mt-[64px] flex gap-[16px]">
                        <div className="extra flex items-center gap-[6px]">
                            <img src={gas} alt="" />
                            <span className="description">80L</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={manual} alt="" />
                            <span className="description">Manual</span>
                        </div>
                        <div className="extra flex items-center gap-[6px]">
                            <img src={people} alt="" />
                            <span className="description">6 People</span>
                        </div>
                    </div>
                    <div className="card__bottom mt-[24px] flex items-center justify-between">
                        <div className="bottom__content flex items-center">
                            <h4 className="price">$80.00/</h4>
                            <span className='day'>day</span>
                        </div>
                        <Button className='bottom__btn' type="primary">Rent Now</Button>
                    </div>
                </div>
            </div>
            <div className="cars__bottom__link">
                <div></div>
                <Button className='bottom__link max-w-[156px] w-full h-[44px]' type="primary">Show more car</Button>
                <span className='number'>120 Car</span>
            </div>
        </div>
    </div>
  )
}

export default Cars