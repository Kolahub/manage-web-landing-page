function Slider({ title, info, index }) {
  return (
    <div className="flex gap-4 relative">
      <div className="text-very-light-gray text-center bg-bright-red h-min w-44 py-1 rounded-full relative z-20">{index}</div>
      <div className="">
        <p className=" w-[130%]  text-dark-blue font-bold mb-4 relative z-30 leading-8 lg:leading-none">{title}</p>
        <p className="text-dark-grayish-blue">{info}</p> 
      </div>
      <div className="bg-very-pale-red absolute w-[130%] h-8 translate-x-6 z-10 overflow-hidden  lg:hidden"></div>
    </div>
  );
}

export default Slider;
