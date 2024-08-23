import { HERO } from "../constants";
import koushikImg from "../assets/koushik-min.jpg";
const Hero = () => {
  return (
    <div className="flex min-h-screen flex-wrap items-center">
      <div className="w-full md:w-1/2">
        <p className="mt-6 p-3 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mt-4 font-light text-xl p-4">I am, </p>
        <div className="flex items-center">
          <h2 className="p-3 text-4xl font-bold lg:my-3 lg:p-2 md:text-[2.8rem] capitalize lg:text-[7rem]">
            {HERO.name}
          </h2>
          <span className="mt-[15px] md:mt-[17.5px] md:text-lg lg:mt-[65px]">
            {HERO.lastName}
          </span>
        </div>

        <p className="mb-8 p-3 text-xl">{HERO.description}</p>
        <div className="flex justify-center bg-stone-100/20 mb-6 py-4 text-white w-[12rem] md:w-1/2 items-center md:mx-auto rounded-full">
          <a href="/cv.pdf" download>
            <button>Download CV</button>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:p-8 flex justify-end">
        <div className="flex justify-end">
          <img
            src={koushikImg}
            width={550}
            height={550}
            alt="Koushik Ahmed"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
