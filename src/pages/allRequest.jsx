import React, { useEffect, useState } from "react";
import { BsSearch, BsInfoCircle } from "react-icons/bs";
import { IoIosMenu, IoMdTime } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { GoCheck } from "react-icons/go";
import { TbClock } from "react-icons/tb";
import "./allRequest.css";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { TableData } from "./tabledata";
import { AllRequestApi } from "../apis/allRequestApi";

// let requestCounts = {};

const approve = () => {
  alert("Approved button clicked");
};
const rejected = () => {
  alert("Rejected button clicked!!");
};
const MyView = () => {
  const [modalShow, setModalShow] = useState(false);
  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertSucessClass, setAlertSuccessClass] = useState("reject-alert-text");
  const [alertVariant, setAlertVarient] = useState("danger");
  const [requestCounts, setRequestCounts] = useState({});
  const [requestData, setRequestData] = useState({});
  const [rejectid, setRejectId] = useState("");
  const [formData, setFormData] = useState({});


  // const handleShow = () => setModalShow(true);
  const handleClose = () => {
    setModalShow(false);
    setRejectId("");

  }
  const handleApproveClick = (id, status, reason) => {
    console.log("handleApproveClick===========")
    AllRequestApi.updateStatus(id, status, reason).then((respponce) => {
      // response handling
      // setRequestCounts(requestCounts.data);
      console.log("respponce = = = ", respponce);
      if (respponce.status === "success") {
        setAlertMessage("The View has been Approved Successfully!");
        setAlertVarient("success");
        setAlertSuccessClass("approve-alert-text");
        setAlertShow(true);
        callApi();
      }

    });

  }

  const handleRejectPopUp = (id) => {
    setModalShow(true);
    setRejectId(id)
  }
  function handleRejectClick() {
    AllRequestApi.updateStatus(rejectid, "Rejected", formData["reject_reason"]).then((respponce) => {
      // response handling
      // setRequestCounts(requestCounts.data);
      console.log("respponce = = = ", respponce);
      if (respponce.status === "success") {
        setAlertMessage("The View has been Rejected!");
        setAlertVarient("danger");
        setAlertSuccessClass("reject-alert-text");
        setModalShow(false);
        setAlertShow(true);
      }
    });
    setRejectId("");
    callApi();
  }

  const handleChange = (event) => {
    console.log("event = ", event.target.name);
    console.log("event = ", event.target.value);

    formData[event.target.name] = event.target.value
    setFormData(formData)
    console.log("formData = ", formData)

  };
  // Approved Buttons
  // const status = "approved";
  // let successButtonVariant;
  const callApi = async () => {
    const responce = await Promise.all([AllRequestApi.getRequestCount(), AllRequestApi.getRequestData()])
    // console.log("responce = ",responce)
    setRequestCounts(responce[0].data);
    setRequestData(responce[1])

  }
  useEffect(() => {
    callApi();
    // AllRequestApi.getRequestCount().then((requestCounts) => {
    //   // response handling
    //   setRequestCounts(requestCounts.data)
    // });
    // AllRequestApi.getRequestData().then((requestData) => {
    //   // response handling
    //   setRequestData(requestData)
    // });

    // Promise.all([AllRequestApi.getRequestCount(), AllRequestApi.getRequestData()] )

  }, []);
  // console.log("requestCounts = = =", requestCounts)

  return (
    <div className="main-container m-4">
      <h6 className="mt-2 last_update">Last Updated : 10:00:00 AM</h6>
      <div className="row">
        <div className="col-lg-2 col-md-2">
          <h2>All Request</h2>
        </div>
        <div className="col-lg-6 col-md-6">
          <Alert
            variant={alertVariant}
            show={alertShow}
            className={"reject-alert"}
            onClose={() => setAlertShow(false)}
            dismissible
          >
            <p className={alertSucessClass}>{alertMessage}</p>
          </Alert>
        </div>
      </div>
      <div className="d-flex my-4" style={{ width: "72rem" }}>
        <input
          class="search-bar form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button type="button" class="btn btn-primary">
          <BsSearch className="icon" />
        </button>
      </div>

      <div className="ml-1 row all-request-report">
        <div class="col-md-9 col-md-9 card">
          <div class="card-body d-flex row">
            <div className=" col-md-3">
              <span className="d-flex">
                <IoIosMenu className="icon" />
                <h5 className="request_count ml-2">
                  {requestCounts.all_count}
                </h5>
              </span>
              <h6>All Request</h6>
            </div>

            <div className=" col-md-3">
              <span className="d-flex">
                <IoMdTime className="icon pending_color" />
                <h5 className="request_count ml-2">{requestCounts.pending_count}</h5>
              </span>
              <h6 className="pending_color">Pending</h6>
            </div>

            <div className=" col-md-3">
              <span className="d-flex">
                <GoCheck className="icon approved_color" />
                <h5 className="request_count ml-2">
                  {requestCounts.approved_count}
                </h5>
              </span>
              <h6 className="approved_color">Approved</h6>
            </div>

            <div className=" col-md-3">
              <span className="d-flex">
                <RxCross2 className="icon rejected_color" />
                <h5 className="request_count ml-2">
                  {requestCounts.rejected_count}
                </h5>
              </span>
              <h6 className="rejected_color">Rejected</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-1 row all-request-report">
        <div className="col-md-3 offset-md-9 col-lg-3 offset-lg-9">
          <nav aria-label="Page navigation example float-right">
            <ul class="pagination pagination-position">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <table class="table table-responsive table-bordered">
        <thead class="thead-light thead-light_blue">
          <tr>
            <th scope="col">Target view name</th>
            <th scope="col">Target Schema name</th>
            <th scope="col">Catalog</th>
            <th scope="col">Schema</th>
            <th scope="col">Table</th>
            <th scope="col">Environment</th>
            <th scope="col">Type</th>
            <th scope="col">Region</th>
            <th scope="col">Created Date</th>
            <th scope="col">Last Updated</th>
            <th scope="col">Approved By</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {requestData.data?.map((data) => {
            return (
              <tr>
                <th scope="row">{data.view_name}</th>
                <td>{data.target_schema_name}</td>
                <td>{data.catelog_name}</td>
                <td>{data.schema_name}</td>
                <td>{data.table_name}</td>
                <td>{data.env_name}</td>
                <td>{data.type_name}</td>
                <td>{data.region_name}</td>
                <td>{data.created_date}</td>
                <td>{data.updated_date}</td>
                {/* <td>{data.Approved_by}</td> */}
                <td>Admin</td>
                <td>
                  {data.status === "Approved" && (
                    <Button
                      variant="outline-success"
                      disabled
                      className="custom-button-success"
                    >
                      Approved
                    </Button>
                  )}
                  {data.status === "Rejected" && (
                    <Button
                      variant="outline-danger"
                      disabled
                      className="custom-button-danger"
                    >
                      Rejected
                      <TbClock className="clock-icon" />
                    </Button>
                  )}
                  {data.status === "Pending" && (
                    <div className="d-flex action-buttons">
                      <Button
                        variant="success"
                        onClick={() => handleApproveClick(data.id, "Approved", "")}
                        class="btn btn-success m-2"
                      >
                        <GoCheck className="icon" />
                      </Button>{" "}
                      <Button
                        variant="danger"
                        // onClick={()=>handleShow()}
                        onClick={() => handleRejectPopUp(data.id)}
                        class="btn btn-danger m-2"
                      >
                        <RxCross2 className="icon" />
                      </Button>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal
        show={modalShow}
        onHide={handleClose}
        backdrop="sm"
        arial-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4 className="rej-content">
            Are you sure you want to Reject the View?
          </h4>

          <p className="reject-reason-text">Rejection Reason</p>
          <Form>
            <Form.Group controlId="fromBasicText">
              <Form.Control as="textarea" rows={2} name="reject_reason" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="md-3">
              <div className="d-flex end-button">
                <Button
                  variant="link"
                  className="reject-cancel-button"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button onClick={handleRejectClick} className="Modal-button">
                  Save
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default MyView;
