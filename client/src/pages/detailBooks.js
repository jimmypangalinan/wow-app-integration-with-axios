import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// assets
import BookCover from "../assets/book-cover-detail.png";
import ReadBook from "../assets/read.png";

// component
import Profile from "../pages/components/profile";
import ButtonAddMyList from "./components/buttonAddMyList";

// useContext
import { UserContextSubscribe } from "../context/userContextSubscribe";

function Detailbooks() {
  const [state, dispatch] = useContext(UserContextSubscribe);
  const navigate = useNavigate();

  function handleReadBook() {
    navigate("/readBook");
  }

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
                <img src={BookCover} alt="" />
              </div>
              <div className="col-6 ms-3 mt-3">
                <h1 className="fw-bold">Tess on The Road</h1>
                <h4 className="text-muted">Rachel Hartman</h4>
                <div>
                  <h3>Publication Date</h3>
                  <p className="text-muted">April 2021</p>
                </div>
                <div>
                  <h3>Pages</h3>
                  <p className="text-muted">432</p>
                </div>
                <div>
                  <h3 className="text-danger">ISBN</h3>
                  <p className="text-muted">432386678537</p>
                </div>
              </div>
            </div>
            <div className="text-justify" style={{ textAlign: "justify" }}>
              <h3 className="mt-3 fw-bold">About This Book</h3>
              <p>
                In the medieval kingdom of Goredd, women are expected to be
                ladies, men are their protectors, and dragons get to be whomever
                they want. Tess, stubbornly, is a troublemaker. You can’t make a
                scene at your sister’s wedding and break a relative’s nose with
                one punch (no matter how pompous he is) and not suffer the
                consequences. As her family plans to send her to a nunnery, Tess
                yanks on her boots and sets out on a journey across the
                Southlands, alone and pretending to be a boy.
              </p>
              <p>
                Where Tess is headed is a mystery, even to her. So when she runs
                into an old friend, it’s a stroke of luck. This friend is a
                quigutl—a subspecies of dragon—who gives her both a purpose and
                protection on the road. But Tess is guarding a troubling secret.
                Her tumultuous past is a heavy burden to carry, and the memories
                she’s tried to forget threaten to expose her to the world in
                more ways than one.
              </p>
              <p>
                Returning to the fascinating world she created in the
                award-winning and New York Times bestselling Seraphina, Rachel
                Hartman introduces readers to a new character and a new quest,
                pushing the boundaries of genre once again in this wholly
                original fantasy.
              </p>
            </div>
            <div className="d-flex justify-content-end">
                <ButtonAddMyList />
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
