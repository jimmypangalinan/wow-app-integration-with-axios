import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

// assets
import { UserContextSubscribe } from "../context/userContextSubscribe";
import { product } from "../data";
import Banner from "../assets/banner.png";

// component
import Profile from "./components/profile";

function AfterLogin() {
  const [state, dispatch] = useContext(UserContextSubscribe);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  function handleShow() {
    setShow(true);
  }

  function toDetailBook() {
    navigate("/detailBooks");
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose} className="mt-5">
        <div className="py-3 text-center">
          <p className="fw-bold my-3 mx-5 text-danger">
            Please Make a Payment To Read The Latest Books
          </p>
        </div>
      </Modal>
      <div className="container">
        <div className="row">
          <div className="col-3  position-relative">
            <div className="position-fixed">
              <Profile />
            </div>
          </div>
          <div className="col-9">
            <img src={Banner} alt="" className="banner" />
            <div>
              <h1 className="ms-4 my-4 fw-bold">List Book</h1>
            </div>
            {state.isSubs ? (
              <div
                className="row ms-3"
                onClick={toDetailBook}
                style={{ cursor: "pointer" }}
              >
                {product.map((item, index) => {
                  return (
                    <div className="col-3" key={index}>
                      <img src={item.image} alt="" />
                      <h5 className="my-2">{item.title}</h5>
                      <p>{item.author}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div
                className="row ms-3"
                onClick={handleShow}
                style={{ cursor: "pointer" }}
              >
                {product.map((item, index) => {
                  return (
                    <div className="col-3" key={index}>
                      <img src={item.image} alt="" />
                      <h5 className="my-2">{item.title}</h5>
                      <p>{item.author}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfterLogin;
