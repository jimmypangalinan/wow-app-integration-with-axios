import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { API } from "../config/api";

// assets
import Gender from "../assets/gender.png";
import Phone from "../assets/phone.png";
import Mail from "../assets/mail.png";
import Map from "../assets/map.png";
import Foto from "../assets/foto.png";

// import profile
import Profile from "./components/profile";

// import { AddMyListContext } from "../context/dataAddMyList";

function ProfileActive() {
  const navigate = useNavigate();
  function handleToDetailBook() {
    navigate("/detailBooks");
  }
  // const [state, dispatch] = useContext(AddMyListContext);

  function exploreBook() {
    navigate("/afterlogin");
  }

  /////////

  const [myList, setMyList] = useState([]);

  const getMyList = async () => {
    try {
      const response = await API.get("/myLists");
      setMyList(response.data.myListExis);
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    getMyList();
  }, []);

  console.log(myList);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3 position-relative">
            <div className="position-fixed">
              <Profile />
            </div>
          </div>
          <div className="col-9" id="premium">
            <div className="">
              <div className="position-sticky sticky-top">
                <h3 className="py-4 fw-bold ">Profile</h3>
              </div>
            </div>
            <div className="row rounded" style={{ backgroundColor: "#FFD9D9" }}>
              <div className="col-8  ms-4 pt-5 pb-3">
                <div className="d-flex">
                  <div className="mt-1">
                    <img src={Mail} alt="" width={40} />
                  </div>
                  <div className="ms-4">
                    <h6 className="fw-bold">jimmi@mail.com</h6>
                    <p>email</p>
                  </div>
                </div>
                <div className="d-flex my-1">
                  <div className="mt-2">
                    <img src={Gender} alt="" width={40} />
                  </div>
                  <div className="ms-4">
                    <h6 className="fw-bold">Jimmi</h6>
                    <p>Name</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="mt-2">
                    <img src={Phone} alt="" width={40} />
                  </div>
                  <div className="ms-4">
                    <h6 className="fw-bold">+62 987265386</h6>
                    <p>Phone</p>
                  </div>
                </div>
                <div className="d-flex mt-1">
                  <div className="mt-2">
                    <img src={Map} alt="" width={40} />
                  </div>
                  <div className="ms-4">
                    <h6 className="fw-bold">Ciputit</h6>
                    <p>Address</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="col pt-5">
                  <img src={Foto} alt="" className="rounded" />
                  <div className="d-grid ">
                    <button className="btn btn-danger my-3" type="button">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex my-4">
              <div className="col">
                <h2 className="fw-bold">My List Book</h2>
              </div>
              <div className="col text-end">
                <button className="btn btn-danger " onClick={exploreBook}>
                  Explore Book
                </button>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="row d-flex">
                {myList.map((item, index) => {
                  return (
                    <div
                      className="col-3"
                      key={index}
                      // onClick={handleToDetailBook}
                    >
                      <img
                        src={`http://localhost:5000/uploads/cover/${item.product.cover}`}
                        alt=""
                        className="img-fluid mx-auto w-100"
                        style={{ height: 320, borderRadius: 8 }}
                      />
                      <h5 className="my-2">{item.product.title}</h5>
                      <p>{item.product.author}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileActive;
