import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h1 className="text-4xl font-palanquin mt-10 font-bold capitalize lg:max-w-lg">
          We Provide You
          <span className="text-red-500 mt-3"> Super </span>
          <span className="text-red-500 mt-3">Quality </span> Shoes
        </h1>
        <p className="mt-4 info-text lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
          <br />
          <br />
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          {" "}
          <Button label="Views Details" iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe -8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
