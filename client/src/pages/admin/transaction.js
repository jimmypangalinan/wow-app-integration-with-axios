import React, { useState, useEffect } from "react";
import { Table, Dropdown, Modal } from "react-bootstrap";
import { API } from "../../config/api";

// component
import NavbarComponent from "../../pages/components/navbarAdmin";
function Transaction() {
  //////////////////////
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [timeActive, settimeActive] = useState("");

  console.log(startDate);
  // --------------------- menentukan start date hari ini -----------------------------
  var months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  // ------------------ menentukan end date --------------------------------------
  const loadStartDate = async () => {
    var date = new Date();
    var month = date.getMonth();
    let Tanggal = new Date().getDate();
    let Tahun = new Date().getFullYear();

    setStartDate(Tahun + "-" + months[month] + "-" + Tanggal);
  };

  // ------------------ menentukan due date --------------------------------------
  const loadDueDate = async () => {
    var d = new Date(startDate);
    console.log(d.toLocaleDateString());
    d.setDate(d.getDate() + 30);
    const options1 = { year: "numeric" };
    const options2 = { month: "2-digit" };
    const options3 = { day: "2-digit" };
    let dueDateYear = d.toLocaleDateString("id-id", options1);
    let dueDateMonth = d.toLocaleDateString("id-id", options2);
    let dueDateDay = d.toLocaleDateString("id-id", options3);

    setDueDate(dueDateYear + "-" + dueDateMonth + "-" + dueDateDay);
  };

  // --------- menghotung selisih hari dari sekarang dengan due date --------------
  var date1 = new Date(startDate); // tanggal sekarang
  var date2 = new Date(dueDate); // tanggal masa berlangganan

  var Difference_In_Time = date2.getTime() - date1.getTime();

  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  console.log(Difference_In_Days);
  // Delete ketika tanggal berlangganan lebih kecil sama dengan tanggal sekarang
  // if (dueDate <= startDate) {
  //   try {
  //     API.delete(`/transaction/${byId}`);

  //     // load transaction
  //     loadTransaction();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  ///////////////////
  const [transaction, setTransaction] = useState([]);

  // state approve
  const [aprove] = useState({
    remainingActive: Difference_In_Days,
    paymentStatus: "Approved",
    userStatus: "Active",
  });

  // // state cancel
  const [cancel] = useState({
    remainingActive: 0,
    paymentStatus: "Cancel",
    userStatus: "No Active",
  });

  // get transaction
  const getTransaction = async () => {
    try {
      const response = await API.get("/transactions");
      setTransaction(response.data.data.transaction);
      console.log(transaction);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransaction();
  }, []);

  // const [aprove] = useState({
  //   startDate: `${startDate}`,
  //   endDate: `${dueDate}`,
  //   remainingActive: `${Difference_In_Days}`,
  //   paymentStatus: "Approved",
  //   userStatus: "Active",
  // });

  // console.log(aprove);
  // approved transaction
  const approvedTrans = async (id) => {
    try {
      // const config = {
      //   headers: {
      //     "Content-type": "multipart/form-data",
      //   },
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      let a = `${startDate}`;

      console.log(a);
      console.log(`${dueDate}`);
      console.log(`${Difference_In_Days}`);
      // console.log(`${Date.Now()}`);

      // const formData = new FormData();
      // formData.set("startDate", `${startDate}`);
      // formData.set("startDate", `${Date.Now()}`);
      // formData.set("endDate", `${dueDate}`);
      // formData.set("remainingActive", `${Difference_In_Days}`);
      // formData.set("remainingActive", 0);
      // formData.set("paymentStatus", "Approved");
      // formData.set("userStatus", "Active");

      const respone = await API.patch(`/transaction/${id}`, aprove, config);
      getTransaction();
    } catch (error) {
      console.log(error);
    }
  };

  // cancel transaction
  const cancelTrans = async (id) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const respone = await API.patch(`/transaction/${id}`, cancel, config);
      getTransaction();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadStartDate();
  }, []);

  useEffect(() => {
    loadDueDate();
  }, [startDate]);

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
              <th>Account Number</th>
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
                  <td>
                    <a
                      href={`http://localhost:5000/uploads/transferProof/${item.transferProof}`}
                      target="_blank"
                    >
                      {item.accountNumber}
                    </a>
                  </td>
                  <td>{item.remainingActive} / Hari</td>
                  {item.userStatus === "Active" ? (
                    <td className="text-success fw-bold">Active</td>
                  ) : (
                    <td className="text-danger fw-bold">No Active</td>
                  )}

                  {item.paymentStatus === "Approved" ? (
                    <td className="text-success fw-bold">Aprove</td>
                  ) : item.paymentStatus === "Pending" ? (
                    <td className="text-warning fw-bold">Pending</td>
                  ) : (
                    <td className="text-danger fw-bold">Cancel</td>
                  )}
                  <td className="text-center">
                    <Dropdown>
                      <Dropdown.Toggle variant="none shadow-none" />
                      <Dropdown.Menu variant="dropdown-menu-center">
                        <Dropdown.Item
                          className="fw-bold text-success"
                          onClick={() => {
                            approvedTrans(item.id);
                          }}
                        >
                          Approve
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="fw-bold text-danger"
                          onClick={() => {
                            cancelTrans(item.id);
                          }}
                        >
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
