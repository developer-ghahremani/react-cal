import Lottie from "lottie-react";
import React from "react";
import anim from "./../../../assets/anim/loading.json";
type Props = {};

const ILoading = (props: Props) => {
  return (
    <Lottie animationData={anim} loop style={{ width: 100, height: 100 }} />
  );
  return (
    <div className="w-8 h-8 bg-primary animate__animated animate__infinite animate__bounce " />
  );
};

export default ILoading;
