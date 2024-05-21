function Engage() {
  return (
    <section className="bg-simplify-section-mobile md:bg-simplify-section-desktop bg-no-repeat px-4 sm:px-10 lg:px-20 xl:px-36 py-16  bg-bright-red">
        <div className="flex gap-6 md:gap-3 flex-col md:flex-row justify-between items-center  w-full">
        <div className="w-[90%] md:w-[40%]">
            <h1 className="text-very-light-gray leading-10  md:leading-none text-center md:text-start text-[2.4rem] md:text-4xl font-semibold">Simplify how your team works today.</h1>
        </div>
        <div className="">
        <button className='bg-very-light-gray text-bright-red hover:bg-opacity-75 py-3 px-9 font-semibold text-lg rounded-full shadow-2xl shadow-red-600 transition-all'>Get Started</button>
        </div>
        </div>
    </section>
  )
}

export default Engage