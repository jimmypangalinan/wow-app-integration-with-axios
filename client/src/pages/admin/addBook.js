import React, { useState, useContext } from "react";
import { Form, Alert } from "react-bootstrap";
import NavbarComponent from "../components/navbarAdmin";
import Attach from "../../assets/attach.png";
import { API } from "../../config/api";

function AddBook() {
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    title: "",
    publicationDate: "",
    pages: "",
    author: "",
    isbn: "",
    about: "",
    bookFile: "",
    cover: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      // Data body
      const formData = new FormData();
      formData.set("title", form.title);
      formData.set("publicationDate", form.publicationDate);
      formData.set("pages", form.pages);
      formData.set("author", form.author);
      formData.set("isbn", form.isbn);
      formData.set("about", form.about);
      formData.set("bookFile", form.bookFile[0], form.bookFile[0].name);
      formData.set("cover", form.cover[0], form.cover[0].name);

      const response = await API.post("/addProduct", formData, config);
      console.log(response);

      if (response.data.status == "Success") {
        const alert = (
          <Alert variant="success" className="py-1">
            Success Add Book
          </Alert>
        );
        setMessage(alert);
      } else {
        const alert = (
          <Alert variant="info" className="py-1">
            Your Title Book Already Exist !!
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1 w-50">
          Falied to add book !!!
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  };

  return (
    <div className="position-relative">
      <NavbarComponent className="position-fixed" />
      <div className="container mt-3">
        <div className="col-10 offset-1">
          <div className="row mx-5 pb-2">
            <h2 className="fw-bold">Add Book</h2>
          </div>

          <div className="row mx-5 ">
            <Form onSubmit={handleSubmit}>
              {message && message}
              <Form.Group className="mb-3">
                <Form.Control
                  style={{ backgroundColor: "#F4F1F1" }}
                  type="text"
                  name="title"
                  onChange={handleChange}
                  placeholder="Title Book"
                />
              </Form.Group>
              <Form.Control
                style={{ backgroundColor: "#F4F1F1" }}
                type="text"
                name="publicationDate"
                onChange={handleChange}
                placeholder="Publication Date"
              />
              <Form.Group className="mb-3" />
              <Form.Group className="mb-3">
                <Form.Control
                  style={{ backgroundColor: "#F4F1F1" }}
                  type="text"
                  name="pages"
                  onChange={handleChange}
                  placeholder="Pages"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  style={{ backgroundColor: "#F4F1F1" }}
                  type="text"
                  name="author"
                  onChange={handleChange}
                  placeholder="Author"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  style={{ backgroundColor: "#F4F1F1" }}
                  type="text"
                  name="isbn"
                  onChange={handleChange}
                  placeholder="ISBN"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  style={{ backgroundColor: "#F4F1F1" }}
                  as="textarea"
                  type="text"
                  name="about"
                  rows={4}
                  onChange={handleChange}
                  placeholder="About This Book"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <label className="col ps-2 col-lg-3 border border-danger rounded  mt-3 ps-lg-3 py-2 fw-bold text-start text-danger">
                  Attache Book File
                  <input
                    type="file"
                    name="bookFile"
                    onChange={handleChange}
                    className="fileInput d-none "
                  />
                  <img
                    src={Attach}
                    alt=""
                    className="float-end pe-2 visiable"
                  />
                </label>
                <label className="col ps-2 col-lg-3 border border-danger rounded ms-lg-3 mt-3 ps-lg-3 py-2 fw-bold text-start text-danger">
                  Attache Cover Book
                  <input
                    type="file"
                    name="cover"
                    onChange={handleChange}
                    className="fileInput d-none "
                  />
                  <img
                    src={Attach}
                    alt=""
                    className="float-end pe-2 visiable"
                  />
                </label>
              </Form.Group>
              <Form.Group className="mb-3 text-end">
                <button
                  className="btn  btn-danger"
                  type="submit"
                  style={{ width: 200 }}
                >
                  Add Book
                </button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
