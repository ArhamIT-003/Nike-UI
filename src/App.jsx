import Navbar from "./components/Navbar";
import PopularProducts from "./services/PopularProducts";
import Hero from "./services/Hero";
import SpecialsOffers from "./services/SpecialsOffers";
import SuperQuality from "./services/SuperQuality";
import CustomerReviews from "./services/CustomerReviews";
import Subscribe from "./services/Subscribe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">Services</section>
      <section className="padding">
        <SpecialsOffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default App;
