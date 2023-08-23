import { star } from "../assets/icons";
const ProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} width={280} height={280} />
      <div className="flex justify-start gap-2.5 mt-8">
        <img src={star} alt="rating" className="" width={24} height={24} />
        <p className=" font-montserrat text-lg leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="leading-normal font-semibold text-2xl font-palanquin mt-2">
        {name}
      </h3>
      <p className="text-coral-red leading-normal font-semibold text-2xl font-montserrat mt-2">
        {price}
      </p>
    </div>
  );
};

export default ProductCard;
