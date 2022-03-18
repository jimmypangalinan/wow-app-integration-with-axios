import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// assets
import AddMyList from "../../assets/add-my-list.png";

function ButtonAddMyList() {
  const navigate = useNavigate();

  function addBookToMyList() {
    navigate("/profileactive");
  }
  return (
    <div className="text-end">
      <button className="btn btn-danger me-3 fw-bold" onClick={addBookToMyList}>
        Add My List <img src={AddMyList} alt="" className="ms-3" />
      </button>
    </div>
  );
}

export default ButtonAddMyList;
