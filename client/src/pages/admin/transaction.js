import React from "react";

// component boosttrap
import { Table, Dropdown } from "react-bootstrap";

// component
import NavbarComponent from "../../pages/components/navbarAdmin";

function Transaction() {
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
            <tr>
              <td className="text-center">1</td>
              <td>Jimmy Crystal</td>
              <td>bil.jpg</td>
              <td>26 / Hari</td>
              <td className="text-success">Active</td>
              <td className="text-success">Approve</td>
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
            <tr>
              <td className="text-center">2</td>
              <td>Mark</td>
              <td>bil.jpg</td>
              <td>@mdo</td>
              <td className="text-danger">No Active</td>
              <td className="text-danger">Cancel</td>
              <td className="text-center">
                <Dropdown>
                  <Dropdown.Toggle variant="none" id="dropdown-basic" />
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Transaction;
