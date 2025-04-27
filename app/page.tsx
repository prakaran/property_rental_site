import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";

const HomePage = () => {
  return (
    <>
      <div className="dark:bg-gray-900">
        <Hero />
        <InfoBoxes />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
