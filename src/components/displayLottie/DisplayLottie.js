import React from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

const DisplayLottie = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
  };

  return (
    <React.Suspense fallback={<Loading />}>
      <Lottie
        animationData={defaultOptions.animationData}
        loop={defaultOptions.loop}
        autoplay={defaultOptions.autoplay}
      />
    </React.Suspense>
  );
};

export default DisplayLottie;
