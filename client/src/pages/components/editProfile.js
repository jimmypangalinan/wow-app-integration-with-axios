import React, { useEffect, useState } from "react";
import { API } from "../../config/api";
import { Button, Modal, Form, Select } from "react-bootstrap";

function EditProfile() {
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    gender: "",
    phone: "",
    address: "",
    image: "",
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
      console.log(form);
      const formData = new FormData();
      formData.set("gender", form.gender);
      formData.set("phone", form.phone);
      formData.set("address", form.address);
      formData.set("image", form.image[0], form.image[0].name);

      console.log(formData);

      const respone = await API.patch(`/updateProfile`, formData, config);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal
        show={show}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => {
          setShow(false);
        }}
      >
        <Form className="p-4" onSubmit={handleSubmit}>
          <h3 className="fw-bold py-3">Edit Profile</h3>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Select
              name="gender"
              onChange={handleChange}
              aria-label="Default select example"
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              type="text"
              name="phone"
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <textarea
              type="text-area"
              name="address"
              onChange={handleChange}
              placeholder="Address"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <input
              class="form-control"
              type="file"
              name="image"
              onChange={handleChange}
              id="formFile"
              title="Photo Profile"
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="danger" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
      <Button
        variant="danger px-5 d-grid w-100  mx-auto"
        onClick={() => {
          setShow(true);
        }}
      >
        Edit Profile
      </Button>
    </div>
  );
}

export default EditProfile;
