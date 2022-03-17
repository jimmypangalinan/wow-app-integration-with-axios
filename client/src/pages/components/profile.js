import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// useContext
import { UserContextSubscribe } from "../../context/userContextSubscribe";
import { UserContextModal } from "../../context/userContextModal";
import { UserContextToken } from "../../context/useContextToken";
//assets
import Foto from "../../assets/profile.png";
import Icon from "../../assets/icon-wow.png";
import User from "../../assets/user.png";
import Bill from "../../assets/bill.png";
import Logout from "../../assets/logout.png";

function Profile() {
  const navigate = useNavigate();

  const [show, disShow] = useContext(UserContextModal);
  const [token, setToken] = useContext(UserContextToken);

  function handleProfile() {
    navigate("/profileActive");
  }
  function handleSubsribe() {
    navigate("/subscribe");
  }

  const [state, dispatch] = useContext(UserContextSubscribe);

  function handleLogOut() {
    dispatch({
      type: "SUBSCRIBE",
      payload: false,
    });

    disShow({
      type: "NOT_SHOW",
      isLogin: false,
    });

    navigate("/");

    setToken({
      type: "LOGOUT",
      isLogin: false,
      user: {},
    });
  }

  return (
    <div>
      <div className=" text-center">
        <div className="mt-5 mb-4">
          <img
            src={Icon}
            alt=""
            className="logo"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="mb-4">
          <img src={Foto} alt="" />
        </div>
        <div className="my-4">
          <h4 className="fw-bold mb-4">Jimmy Pangalinan</h4>
          <h5 className="text-danger fw-bold">
            {state.isSubs ? (
              <p className="text-success">Subscribe</p>
            ) : (
              <p>Not Subscribe</p>
            )}
          </h5>
          {console.log("ini adalah" + state.isSubs)}
        </div>
        <hr />
        <div
          className="my-3 py-3 text-start mask"
          onClick={handleProfile}
          style={{ cursor: "pointer" }}
        >
          <img src={User} alt="" className="d-inline me-4" />
          <h4 className="d-inline ms-3 text-muted ">Profile</h4>
        </div>
        <div className="my-3 py-3 text-start">
          <img src={Bill} alt="" className="d-inline me-4" />
          <h4
            className="d-inline ms-3 text-muted"
            onClick={handleSubsribe}
            style={{ cursor: "pointer" }}
          >
            Subscribe
          </h4>
        </div>
        <hr />
        <div
          className="my-3 py-4 text-start"
          onClick={handleLogOut}
          style={{ cursor: "pointer" }}
        >
          <img src={Logout} alt="" className="d-inline me-4" />
          <h4 className="d-inline ms-3 text-muted">Logout</h4>
        </div>
      </div>
    </div>
  );
}

export default Profile;
