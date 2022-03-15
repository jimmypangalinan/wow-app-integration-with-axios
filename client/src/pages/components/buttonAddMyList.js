import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// assets
import AddMyList from '../../assets/add-my-list.png';

// useContext
import { product } from '../../data';
import { AddMyListContext } from '../../context/dataAddMyList';
import { UserContextSubscribe } from '../../context/userContextSubscribe';

function ButtonAddMyList() {
  const navigate = useNavigate();
  // useContext
  const [state, dispatch] = useContext(AddMyListContext);

  // useContext for check subscribe or nut
  const [login, setLogin] = useContext(UserContextSubscribe);

  console.log(login);

  const data = state.myList;

  function addBookToMyList() {
    data.push(product[1]);
    dispatch({
      type: 'MY_LIST',
      payload: data,
    });
    navigate('/profileactive');
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
