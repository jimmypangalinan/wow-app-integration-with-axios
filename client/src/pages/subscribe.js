import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

//  component bootstrap
import { Form, Modal } from "react-bootstrap";

// assets
import Wow from "../assets/wow.png";
import Attach from "../assets/attach.png";

// import profile
import Profile from "../pages/components/profile";

function Subscribe() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleToShowPremium = () => setShow(true);
  const handleToHidePremium = () => {
    setShow(false);
    navigate("/afterlogin");
  };

  return (
    <div>
      <Modal show={show} onHide={handleToHidePremium} className="mt-5">
        <div className="py-3 text-center">
          <p className="fw-bold my-3 mx-5 text-success">
            Thank you for subscribing to premium, your premium package will be
            active after our admin approves your transaction, thank you
          </p>
        </div>
      </Modal>
      <div className="container">
        <div className="row">
          <div className="col-3 position-relative">
            <div className="position-fixed">
              <Profile />
            </div>
          </div>
          <div
            className="col-9 d-flex justify-content-center align-items-center "
            id="premium"
            style={{ height: "100vh" }}
          >
            <div className="">
              <div className=" text-center">
                <h1 className="mb-5">Premium</h1>
                <h5 className="mx-2 ">
                  Pay now and access all the latest books from{" "}
                  <img src={Wow} alt="" />
                </h5>
                <h3 className="my-3">
                  <img src={Wow} alt="" /> : 082298937
                </h3>

                <div className="col-10 offset-1 ">
                  <Form.Control
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Input Your Account Number"
                  />
                </div>

                <label className="col-10 border border-danger mt-3 ps-3 py-2 fw-bold text-start text-danger">
                  Attache proof of transfer
                  <input type="file" className="fileInput d-none " />
                  <img src={Attach} alt="" className="float-end pe-3" />
                </label>
                <div className="col-10 offset-1 d-grid gap-2 py-5">
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={handleToShowPremium}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
