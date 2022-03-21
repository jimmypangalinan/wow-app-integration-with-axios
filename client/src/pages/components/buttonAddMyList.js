import React from "react";
// assets
import AddMyList from "../../assets/add-my-list.png";

function ButtonAddMyList() {
  return (
    <div className="text-end">
      <button className="btn btn-danger me-3 fw-bold">
        Add My List <img src={AddMyList} alt="" className="ms-3" />
      </button>
    </div>
  );
}

export default ButtonAddMyList;
