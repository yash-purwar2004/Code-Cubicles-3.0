import {FrontImage} from "@/components/component/front";
import { Navbar } from "@/components/component/navbar";

const LandingPage = () => {
  return (
  <div className="h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-300">
      <Navbar />
      <FrontImage/>
  </div>
  );
};

export default LandingPage;
