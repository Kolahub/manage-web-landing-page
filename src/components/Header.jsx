import { useState } from 'react'
import LogoImg from '../assets/images/logo.svg'
import Hamburger from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close.svg'

function Header() {
    const [clicked, setClicked] = useState(false)
    let srcValue = Hamburger
    let overLayStyle  = 'bg-gradient-to-b from-white to-very-dark-blue opacity-40 fixed top-0 left-0 bottom-0 right-0 z-40 transition-all'
    let navMobileStyle = 'bg-very-light-gray w-[90%] sm:w-[80%] fixed top-1/3 left-1/2  -translate-y-1/3 lg:bg-transparent lg:w-auto lg:static lg:top-0 lg:left-0 lg:-translate-y-0 lg:-translate-x-0 transition-all '
     function handleClick () {
        setClicked(prevClick => !prevClick)
     }

     if(clicked) {
        srcValue = close
        overLayStyle += ' block'
        navMobileStyle += ' -translate-x-1/2 z-50'
     } else {
        overLayStyle += ' w-[0%]'
        navMobileStyle += ' translate-x-2/3'
     }

  return (
    <header className="px-4 sm:px-10 lg:px-20 xl:px-36 py-5">
        <div className='flex justify-between items-center h-20'>
            <div className='mt-2'>
                <img src={LogoImg} alt="LOGO ICON" className='w-full transi'/>
            </div>

            <button className="lg:hidden fixed right-4 sm:right-10  z-50 " onClick={handleClick}>
                <img src={srcValue} alt="Hamburger"/>
            </button>

            <div className={navMobileStyle}>   
                <ul className='flex flex-col lg:flex-row gap-6 lg:gap-8 w-full p-8 lg:p-0 text-center font-semibold text-dark-blue text-2xl lg:text-base'>
                    <li><a href="#" className='hover:text-dark-grayish-blue'>Pricing</a></li>
                    <li><a href="#" className='hover:text-dark-grayish-blue'>Product</a></li>
                    <li><a href="#" className='hover:text-dark-grayish-blue'>About Us</a></li>
                    <li><a href="#" className='hover:text-dark-grayish-blue'>Careers</a></li>
                    <li><a href="#" className='hover:text-dark-grayish-blue'>Community</a></li>
                </ul>
            </div>

            <button className='bg-bright-red text-very-light-gray hover:bg-opacity-75 py-3 px-9 font-semibold text-lg rounded-full shadow-2xl shadow-red-600 transition-all hidden lg:block'>Get Started</button>
        </div>
        <div className={overLayStyle}></div>
    </header>


  )
}

export default Header