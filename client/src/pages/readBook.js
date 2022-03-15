import React, { useState } from "react";
import { ReactReader, ReactReaderStyle } from "react-reader";
import { useNavigate } from "react-router-dom";

import NavbarComponent from "../pages/components/navbarAdmin";

// import { epub } from "../../dataDummy/fileEpub";

const ReadBook = () => {
  const navigate = useNavigate();
  // const [location, setLocation] = useState(null);
  // const locationChanged = (epubcifi) => {
  //   setLocation(epubcifi);
  // };

  const ownStyles = {
    ...ReactReaderStyle,
    arrow: {
      ...ReactReaderStyle.arrow,
      color: "rgba(205, 205, 205, 0.7)",
    },
  };
  return (
    <div className="position-relative">
      <div>
        <NavbarComponent />
      </div>
      <div style={{ height: "100vh", position: "relative" }}>
        <ReactReader
          styles={ownStyles}
          // location={location}
          // locationChanged={locationChanged}
          // url={"http://localhost:3000/src/media/alice1.epub"}
          // url="http://localhost:3000/static/media/alice.epub"
          url="https://gerhardsletten.github.io/react-reader/files/alice.epub"
        />
      </div>
    </div>
  );
};

export default ReadBook;
