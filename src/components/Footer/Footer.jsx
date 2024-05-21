import LogoImg from "/src/assets/images/logoWhite.svg";
import { profileIcons, navOpts } from "./footerData.jsx";

function Footer() {
  return (
    <section className="px-4 sm:px-10 lg:px-20 xl:px-36 bg-very-dark-blue py-14 flex flex-col-reverse md:flex-row md:justify-between md:flex-wrap items-center gap-14 md:gap-24 md:h-auto">
      <p className="text-dark-grayish-blue md:hidden">Copyright 2024. All Rights Reserved</p>
      <div className="flex flex-col-reverse md:flex-col justify-between h-24 w-full md:w-auto">
        <img src={LogoImg} alt="" className="w-1/2 md:w-auto mx-auto"/>
        
        <div className="flex gap-3 justify-between px-8">
          {profileIcons.map((el, i) => (
            <a key={i} href="#" className="hover:[&>svg]:fill-bright-red hover:scale-125 scale-150 md:scale-100 transition-all">{el}</a>
            
          ))}
        </div>
      </div>

      <div className="text-very-light-gray flex gap-8 justify-between flex-none md:flex-1 w-full  px-10 md:px-0">
        <ul>
          {
            navOpts.slice(0, 4).map((el, i) => (
              <li key={i}><a href="#" className="hover:text-bright-red transition-all leading-8">{el}</a></li>
            ))
          }
        </ul>

        <ul>
        {
            navOpts.slice(4, 7).map((el, i) => (
              <li key={i}><a href="#" className="hover:text-bright-red transition-all leading-8">{el}</a></li>
            ))
          }
        </ul>
      </div>
      <div className="flex flex-col justify-between w-full md:w-auto md:h-28">
        <form className="flex gap-2">
          <input type="text" className="focus:outline-none border-none py-2 px-3 rounded-full md:w-64 flex-1 md:flex-none text-[16px]"/>
          <button className="bg-bright-red w-16 text-very-light-gray rounded-full hover:opacity-90">Go</button>
        </form>

        <p className="text-dark-grayish-blue hidden md:block">Copyright 2024. All Rights Reserved</p>
      </div>
      
    </section>
  );
}

export default Footer;
