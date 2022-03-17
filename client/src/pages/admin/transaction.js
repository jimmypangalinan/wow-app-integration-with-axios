import React, { useState, useEffect } from "react";

import { Table, Dropdown } from "react-bootstrap";
import { API } from "../../config/api";

// component
import NavbarComponent from "../../pages/components/navbarAdmin";
function Transaction() {
  const [transaction, setTransaction] = useState([]);
  // Create function get products data from database here ...
  const getTransaction = async () => {
    try {
      const response = await API.get("/transactions");
      setTransaction(response.data.data.transaction);
      console.log("ini adalah" + response);
      console.log(transaction);
    } catch (error) {
      console.log(error);
    }
  };

  // Call function get products with useEffect didMount here ...
  useEffect(() => {
    getTransaction();
  }, []);

  console.log(transaction);
  return (
    <div>
      <div>
        <NavbarComponent />
      </div>
      <div className="container mt-3">
        <h3 className="py-3">Incoming Transaction</h3>
        <Table striped hover>
          <thead>
            <tr className="text-danger">
              <th className="text-center">No</th>
              <th>Users</th>
              <th>Bukti Transfer</th>
              <th>Remaining Active</th>
              <th>Status User</th>
              <th>State Payment</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {transaction.map((item, index) => {
              return (
                <tr item={item} key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td>{item.user.fullName}</td>
                  <td>{item.transferProof}</td>
                  <td>{item.remainingActive} / Hari</td>
                  <td className="text-danger fw-bold">{item.userStatus}</td>
                  <td className="text-warning fw-bold">{item.paymentStatus}</td>
                  <td className="text-center">
                    <Dropdown>
                      <Dropdown.Toggle variant="none shadow-none dropdown-menu-start" />
                      <Dropdown.Menu className="" style={{ width: "20" }}>
                        <Dropdown.Item className="fw-bold text-success">
                          Approve
                        </Dropdown.Item>
                        <Dropdown.Item className="fw-bold text-danger">
                          Cancel
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Transaction;
