import React, { useState } from "react";
import BioDetails from "../components/Content/BioDetails/BioDetails";
import BioForm from "../components/Forms/BioForm/BioForm";

const BioPage = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {/* Bio Form */}
      {!toggle && <BioForm setToggle={setToggle} />}
      {/* Bio Details */}
      {toggle && (
        <>
          <BioDetails setToggle={setToggle} />
        </>
      )}
    </>
  );
};

export default BioPage;
