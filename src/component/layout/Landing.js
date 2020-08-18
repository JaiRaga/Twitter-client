import React, { Fragment } from "react";
import { CircleLoader } from "react-spinners";

const Landing = () => {
  return (
    <Fragment>
      <div>
        <h3>Landing</h3>
        <CircleLoader loading size={60} color='blue' />
      </div>
    </Fragment>
  );
};

export default Landing;
