import Lottie from "lottie-react";
import loader from "./../../../lottie/loader.json";
const Loader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="z-20 bg-white/90 h-screen w-screen fixed top-0 left-0 flex items-center justify-center">
        <Lottie animationData={loader} loop={true} style={{ height: "80px" }} />
      </div>
    );
  }
};
export default Loader;
