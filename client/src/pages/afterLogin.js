import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { API } from "../config/api";

// assets
// import { UserContextSubscribe } from "../context/userContextSubscribe";
import Banner from "../assets/banner.png";
import { UserContextToken } from "../context/useContextToken";
// component
import Profile from "./components/profile";

function AfterLogin() {
  const [state, dispatch] = useContext(UserContextToken);
  // const [show, setShow] = useState(false);
  const navigate = useNavigate();
  console.log(state);
  // const handleClose = () => setShow(false);
  // function handleShow() {
  //   setShow(true);
  // }

  // function toDetailBook() {
  //   navigate("/detailBooks");
  // }

  // ////////////////////////////
  const [products, setProduct] = useState([]);

  const getproducts = async () => {
    try {
      const response = await API.get("/books");
      setProduct(response.data.data.books);
      console.log("ini adalah" + response);
    } catch (error) {
      console.log(error);
    }
  };

  // Call function get products with useEffect didMount here ...
  useEffect(() => {
    getproducts();
  }, []);

  console.log(products);

  // function toDetailsBook () => {

  // }

  return (
    <div>
      {/* <Modal show={show} onHide={handleClose} className="mt-5">
        <div className="py-3 text-center">
          <p className="fw-bold my-3 mx-5 text-danger">
            Please Make a Payment To Read The Latest Books
          </p>
        </div>
      </Modal> */}
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
                // onClick={handleShow}

                style={{ cursor: "pointer" }}
              >
                {products.map((item, index) => {
                  return (
                    <div
                      className="col-3 text-wrap"
                      item={item}
                      key={item.id}
                      onClick={() => {
                        navigate(`/detailBooks/${item.id}`);
                      }}
                    >
                      <img
                        src={`http://localhost:5000/uploads/cover/${item.cover}`}
                        alt=""
                      />

                      <h5 className="my-2">{item.title}</h5>
                      <p>{item.author}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="row ms-3" style={{ cursor: "pointer" }}>
                {products.map((item) => {
                  {
                    console.log(item);
                  }
                  return (
                    <div
                      className="col-3 text-wrap"
                      item={item}
                      key={item.id}
                      onClick={() => {
                        navigate(`/detailBooks/${item.id}`);
                      }}
                    >
                      <img
                        src={`http://localhost:5000/uploads/cover/${item.cover}`}
                        alt=""
                        className="img-fluid  mx-auto w-100"
                        style={{ height: 320, borderRadius: 8 }}
                      />

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
