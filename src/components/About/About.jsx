import Slider from "./Slider.jsx";
import { aboutData } from "./slider.js";
function About() {
  return (
    <>
      <section className="px-8 sm:px-10 lg:px-20 xl:px-36 pt-14">
        <div className="flex justify-between flex-col lg:flex-row gap-10 w-full">
          <div className=" w-full lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl text-dark-blue font-semibold">
              What’s different about Manage?
            </h1>
            <p className="text-dark-grayish-blue mt-4  md:mt-8 w-full lg:w-2/3">
              Manage provides all the functionality your team needs, without the
              complexity.Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <div className="flex flex-col gap-8 w-full  lg:w-2/5">
            {aboutData.map((el, i) => (
              <Slider
                key={i}
                title={el.title}
                info={el.info}
                index={String(i + 1).padStart(2, 0)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
