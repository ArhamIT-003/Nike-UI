import ProductCard from "../components/ProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section className="max-container max-sm:mt-12" id="popular">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin mt-10 font-bold">
          Our <span className="text-coral-red">Popular </span>
          Products
        </h2>
        <p className="lg:max-w-lg font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-14">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
