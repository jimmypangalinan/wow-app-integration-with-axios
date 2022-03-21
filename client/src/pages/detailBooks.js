import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../config/api";
// component
import Profile from "../pages/components/profile";
import ReadBook from "../assets/read.png";
import AddMyList from "../assets/add-my-list.png";

function Detailbooks() {
  const navigate = useNavigate();

  function handleReadBook() {
    navigate(`/readBook/${product.id}`);
  }

  const [product, setProduct] = useState({
    title: "",
    publicationDate: "",
    pages: "",
    author: "",
    isbn: "",
    about: "",
    bookFile: "",
    cover: "",
  });

  const { id } = useParams();

  console.log(id);

  const getproduct = async () => {
    try {
      const response = await API.get(`/book/${id}`);
      setProduct(response.data.book);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-3 position-relative">
            <div className="position-fixed">
              <Profile />
            </div>
          </div>
          <div className="col-9">
            <div className="row ">
              <div className="col-5 mt-3">
                <img src={product.cover} alt="" className="img-fluid" />
              </div>
              <div className="col-6 ms-3 mt-3">
                <h1 className="fw-bold">{product.title}</h1>
                <h4 className="text-muted">{product.author}</h4>
                <div>
                  <h3>Publication Date</h3>
                  <p className="text-muted">{product.publicationDate}</p>
                </div>
                <div>
                  <h3>Pages</h3>
                  <p className="text-muted">{product.pages}</p>
                </div>
                <div>
                  <h3 className="text-danger">ISBN</h3>
                  <p className="text-muted">{product.isbn}</p>
                </div>
              </div>
            </div>
            <div className="text-justify" style={{ textAlign: "justify" }}>
              <h3 className="mt-3 fw-bold">About This Book</h3>
              <p>{product.about}</p>
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-danger me-3 fw-bold">
                Add My List <img src={AddMyList} alt="" className="ms-3" />
              </button>
              <button
                className="btn fw-bold"
                onClick={handleReadBook}
                style={{ backgroundColor: "#CDCDCD" }}
              >
                Read Book <img src={ReadBook} alt="" className="ms-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailbooks;
