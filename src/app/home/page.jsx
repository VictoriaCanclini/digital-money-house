import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";

const HomePage = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex justify-between">
        <Sibvar />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
