import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants/index";
import { bigShoe1 } from "../assets/images";
import { useState } from "react";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Summer Collections
        </p>
        <h1 className="text-8xl font-palanquin mt-10 font-bold max-sm:text-[72px] max-sm:leading-none ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrivals
          </span>
          <br />
          <span className="text-red-500 mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="font-montserrat leading-8 text-lg text-slate-gray mt-6 mb-14">
          Discover stylish Nikes arrivals, quality comforts, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="w-full flex justify-start items-center mt-20 flex-wrap gap-16">
          {statistics.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <p className="font-bold font-palanquin text-4xl">{item.value}</p>
              <p className=" text-slate-gray font-montserrat leading-7">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt=""
          width={610}
          height={500}
          className="object-contain"
        />
        <div className="flex gap-4 absolute bottom-[-5%] sm:left=[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              imgUrl={shoe}
              alt="shoe-img"
              setShoeImage={(shoe) => {
                setBigShoeImg(shoe);
              }}
              shoeImage={bigShoeImg}
            />
          ))}
        </div>
      </div>
      <div> </div>
    </section>
  );
};

export default Hero;
