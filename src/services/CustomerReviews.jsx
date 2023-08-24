import ReviewCard from "../components/reviewCard";
import { reviews } from "../constants";
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className=" text-coral-red">Customers</span> Say?
      </h3>
      <p className=" info-text text-center text-slate-gray max-w-lg mt-4 m-auto">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex justify-evenly flex-1 max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
