// import React from "react";
import { Oval } from "react-loader-spinner";

import { Overlay } from "./OverlayLoader";

const Loader = () => {
  return (
    <Overlay>
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Overlay>
  );
};

export default Loader;
