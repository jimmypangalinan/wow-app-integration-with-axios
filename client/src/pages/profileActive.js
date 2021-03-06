import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";
import { UserContextToken } from "../context/useContext";

// assets
import Gender from "../assets/gender.png";
import Phone from "../assets/phone.png";
import Mail from "../assets/mail.png";
import Map from "../assets/map.png";
import Foto from "../assets/foto.png";

// import profile
import Profile from "./components/profile";
import EditProfile from "./components/editProfile";

function ProfileActive() {
  const [state, dispatch] = useContext(UserContextToken);
  console.log(state);
  const navigate = useNavigate();
  // function handleToDetailBook() {
  //   navigate("/detailBooks");
  // }

  function exploreBook() {
    navigate("/afterlogin");
  }

  //profile
  const [profile, setProfile] = useState([]);

  const getProfile = async () => {
    try {
      const response = await API.get("/profile");
      setProfile(response.data.dataProfiles);
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    getProfile();
  }, []);

  console.log(profile);

  // mylist
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
            <div className="row">
              <div className="position-sticky sticky-top">
                <h3 className="py-4 fw-bold ">Profile</h3>
              </div>
            </div>
            <div
              className="row rounded"
              style={{ backgroundColor: "#FFD9D9", height: 400 }}
            >
              <div className="col-7  ms-4 pt-5 pb-3">
                <div className="d-flex">
                  <div className="mt-1">
                    <img src={Mail} alt="" width={40} />
                  </div>
                  <div className="ms-4">
                    {profile ? (
                      <p className="fw-bold">{state.user.email}</p>
                    ) : (
                      <p className="fw-bold">null</p>
                    )}

                    <p>email</p>
                  </div>
                </div>
                <div className="d-flex my-1">
                  <div className="mt-2">
                    <img src={Gender} alt="" width={40} />
                  </div>
                  <div className="ms-4">
                    <h6 className="fw-bold">
                      {profile ? (
                        <span>{profile.gender}</span>
                      ) : (
                        <span>Null</span>
                      )}
                    </h6>
                    <p>Gender</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="mt-2">
                    <img src={Phone} alt="" width={40} />
                  </div>
                  <div className="ms-4">
                    <h6 className="fw-bold">
                      {profile ? (
                        <span>{profile.phone}</span>
                      ) : (
                        <span>Null</span>
                      )}
                    </h6>
                    <p>Phone</p>
                  </div>
                </div>
                <div className="d-flex mt-1">
                  <div className="mt-2">
                    <img src={Map} alt="" width={40} />
                  </div>
                  <div className="ms-4">
                    <h6 className="fw-bold">
                      {profile ? (
                        <span>{profile.address}</span>
                      ) : (
                        <span>Null</span>
                      )}
                    </h6>
                    <p>Address</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="col pt-5">
                  {profile ? (
                    <img
                      src={`http://localhost:5000/uploads/profile/${profile.image}`}
                      alt=""
                      className=" img-fluid  shadow"
                    />
                  ) : (
                    <img
                      src={Foto}
                      alt=""
                      className="rounded img-fluid shadow"
                      style={{
                        height: 300,
                        clipPath: "polygon()",
                      }}
                    />
                  )}
                </div>
                <div className="row pt-4 ">
                  <EditProfile />
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
                      item={item}
                      key={item.idBook}
                      onClick={() => {
                        navigate(`/detailBooks/${item.idBook}`);
                      }}
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
