import './Hero.css'
import { Button, Flex } from 'antd';
import hero1 from '../../images/hero-1.png'
import hero2 from '../../images/hero-2.png'
import arrows from '../../images/arrows.svg'
import { Radio } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const Hero = () => {
  return (
    <div className='hero max-w-[1440px] m-0'>
        <div className="container">
            <div className="her__cards flex justify-between">
                <div className="hero__card-1 max-w-[640px]">
                    <h3 className='card__title'>The Best Platform for Car Rental</h3>
                    <p className='card__text'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                    <Flex gap="small" className='mt-[20px]'>
                        <Button className='btn' type="primary">Rental Car</Button>
                    </Flex>
                    <img className='car1' src={hero1} alt="" />
                </div>
                <div className="hero__card-2 max-w-[640px]">
                    <h3 className='card__title'>Easy way to rent a car at a low price</h3>
                    <p className='card__text'>Providing cheap car rental services and safe and comfortable facilities.</p>
                    <Flex gap="small" className='mt-[20px]'>
                        <Button className='btn2' type="primary">Rental Car</Button>
                    </Flex>
                    <img className='car2' src={hero2} alt="" />
                </div>
            </div>
            <div className="hero__extra flex justify-between mt-[32px] items-center">
                <div className="extra__card">
                    <Radio>Pick-Up</Radio>
                    <div className="extra__card__cards flex justify-between mt-[16px] gap-[24px]">
                        <div className="ex__card flex flex-col gap-[8px]">
                            <h4 className='ex__card__title'>Loactions</h4>
                            <Dropdown
                                menu={{
                                items,}}
                                trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <p className='select'>Select your city</p>
                                    <DownOutlined className='arrow' />
                                </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div className="line"></div>
                        <div className="ex__card flex flex-col gap-[8px]">
                            <h4 className='ex__card__title'>Date</h4>
                            <Dropdown
                                menu={{
                                items,}}
                                trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <p className='select'>Select your date</p>
                                    <DownOutlined className='arrow' />
                                </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div className="line"></div>
                        <div className="ex__card flex flex-col gap-[8px]">
                            <h4 className='ex__card__title'>Time</h4>
                            <Dropdown
                                menu={{
                                items,}}
                                trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <p className='select'>Select your time</p>
                                    <DownOutlined className='arrow' />
                                </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <button className='arrows__btn'>
                    <img src={arrows} alt="" />
                </button>
                <div className="extra__card">
                    <Radio>Drop-Off</Radio>
                    <div className="extra__card__cards flex justify-between mt-[16px] gap-[24px]">
                        <div className="ex__card flex flex-col gap-[8px]">
                            <h4 className='ex__card__title'>Loactions</h4>
                            <Dropdown
                                menu={{
                                items,}}
                                trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <p className='select'>Select your city</p>
                                    <DownOutlined className='arrow' />
                                </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div className="line"></div>
                        <div className="ex__card flex flex-col gap-[8px]">
                            <h4 className='ex__card__title'>Date</h4>
                            <Dropdown
                                menu={{
                                items,}}
                                trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <p className='select'>Select your date</p>
                                    <DownOutlined className='arrow' />
                                </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div className="line"></div>
                        <div className="ex__card flex flex-col gap-[8px]">
                            <h4 className='ex__card__title'>Time</h4>
                            <Dropdown
                                menu={{
                                items,}}
                                trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <p className='select'>Select your time</p>
                                    <DownOutlined className='arrow' />
                                </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero