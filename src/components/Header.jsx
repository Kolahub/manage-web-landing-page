import LogoImg from '../assets/images/logo.svg'

function Header() {
  return (
    <header className="px-4 sm:px-10 lg:px-20 xl:px-36 py-5">
        <div className='flex justify-between items-center h-20'>
            <div className='mt-2'>
                <img src={LogoImg} alt="LOGO ICON" className='w-full'/>
            </div>

            <div className='hidden lg:block'>   
                <ul className='flex gap-8 font-semibold text-dark-blue'>
                    <li><a href="#" className='hover:text-dark-grayish-blue'>Pricing</a></li>
                    <li><a href="#" className='hover:text-dark-grayish-blue'>Product</a></li>
                    <li><a href="#" className='hover:text-dark-grayish-blue'>About Us</a></li>
                    <li><a href="#" className='hover:text-dark-grayish-blue'>Careers</a></li>
                    <li><a href="#" className='hover:text-dark-grayish-blue'>Community</a></li>
                </ul>
            </div>

            <button className='bg-bright-red text-very-light-gray hover:bg-opacity-75 py-3 px-9 font-semibold text-lg rounded-full shadow-2xl shadow-red-600 transition-all hidden lg:block'>Get Started</button>
        </div>
    </header>


  )
}

export default Header