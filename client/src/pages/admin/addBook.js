import React from 'react';

// component boosttrap
import { Form } from 'react-bootstrap';

// assets
import Attach from '../../assets/attach.png';

// component
import NavbarComponent from '../components/navbarAdmin';

function AddBook() {
  return (
    <div className="position-relative">
      <NavbarComponent className="position-fixed" />
      <div className="container mt-3">
        <div className="col-10 offset-1">
          <div className="row mx-5 pb-2">
            <h2 className="fw-bold">Add Book</h2>
          </div>
          <div className="row mx-5 ">
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="title" placeholder="Title Book" />
              </Form.Group>
              <Form.Control type="publication" placeholder="Publication Date" />
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"></Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="pages" placeholder="Pages" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="author" placeholder="Author" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="isbn" placeholder="ISBN" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={5} placeholder="About This Book" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <label className="col ps-2 col-lg-4 border border-danger rounded  mt-3 ps-lg-3 py-2 fw-bold text-start text-danger">
                  Attache Book File
                  <input type="file" className="fileInput d-none " />
                  <img src={Attach} alt="" className="float-end pe-2 visiable" />
                </label>
              </Form.Group>
              <Form.Group className="mb-3 text-end" controlId="exampleForm.ControlTextarea1">
                <button className="btn  btn-danger">Add Book</button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
