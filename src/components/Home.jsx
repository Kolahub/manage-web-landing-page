import illustrationIntro from '../assets/images/illustration-intro.svg'
function Home() {
  return (
    <section className="px-8 sm:px-10 lg:px-20 xl:px-36 pt-6">
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row gap-14 w-100">
        <div className=" w-full lg:w-1/2">
        <h1 className="text-dark-blue font-bold text-4xl sm:text-5xl md:text-6xl">Bring everyone together to build better products.</h1>
        <p className='text-dark-grayish-blue mt-4 sm:mt-8 w-[100%] md:w-2/3'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
        <button className='bg-bright-red text-very-light-gray hover:bg-opacity-75 py-3 px-9 font-semibold text-lg rounded-full shadow-2xl shadow-red-600 mt-6 sm:mt-8 transition-all'>Get Started</button>

        </div>
        <div className="w-fulllg:w-1/2">
            <img src={illustrationIntro} alt="" className='w-full'/>
        </div>
        </div>
    </section>
  )
}

export default Home