import React from "react";

import Swip from "./Swip";
import Offers from "./Offers";

const ListCarousal = () => {
  return (
    <>
      <div
        style={{
          fontSize: "1.1rem",
          padding: "1rem",
          fontWeight: "600",
          textAlign: "left",
        }}
      >
        Your taste
      </div>
      <Swip />
      <Offers />
    </>
  );
};

export default ListCarousal;
