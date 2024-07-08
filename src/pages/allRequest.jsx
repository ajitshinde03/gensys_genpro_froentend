import React from "react";
import { BsSearch, BsInfoCircle } from "react-icons/bs";
import { IoIosMenu,IoMdTime } from "react-icons/io";
import { RxCross2  } from "react-icons/rx";
import { GoCheck } from "react-icons/go";
import "./allRequest.css";


const request_counts = {
  "allReuests": "100",
  "pending": "30",
  "approved": "30",
  "rejected": "40"

}
// const request_Data = [{
//   {"target_view_name": "Finance",
//     "target_schema_name": "b_ecc",
//     "catlog": "adh_hh_d_dev",
//     "schema": "b-ecc",
//     "table": "",
//     // "environment":   
// }]
const approve =() =>{
  alert("Approved button clicked")
}
const rejected =() =>{
  alert("Rejected button clicked!!")
}
const MyView = () => {
  return (
    <div className="container m-4">
      
      <h6 className="mt-2 last_update">Last Updated : 10:00:00 AM</h6>
      <h2>All Request</h2>
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

      <div className="ml-1 row">
        <div class="col-md-8 col-md-8 card">
          <div class="card-body d-flex row">
            <div className=" col-md-3">
              <span className="d-flex">
                <IoIosMenu className="icon" />
                <h5 className="request_count ml-2">{request_counts.allReuests}</h5>
              </span>
              <h6>All Request</h6>
            </div>

            <div className=" col-md-3">
              <span className="d-flex">
                <IoMdTime className="icon pending_color" />
                <h5 className="request_count ml-2">{request_counts.pending}</h5>
              </span>
              <h6 className="pending_color">Pending</h6>
            </div>

            <div className=" col-md-3">
              <span className="d-flex">
                <GoCheck className="icon approved_color" />
                <h5 className="request_count ml-2">{request_counts.approved}</h5>
              </span>
              <h6 className="approved_color">Approved</h6>
            </div>

            <div className=" col-md-3">
              <span className="d-flex">
                <RxCross2  className="icon rejected_color" />
                <h5 className="request_count ml-2">{request_counts.rejected }</h5>
              </span>
              <h6 className="rejected_color">Rejected</h6>
            </div>
          </div>
        </div>

        <div className="col-md-4 ">
          <nav aria-label="Page navigation example float-right">
            <ul class="pagination">
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

      <table class="table table-bordered my-4">
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
            <th scope="col">Created Date</th>
            <th scope="col">Last Updated</th>
            <th scope="col">Approved By</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td className="d-flex">
              <button onClick={approve} type="button" class="btn btn-success m-2">
                <GoCheck className="icon" />
              </button>
              <button onClick={rejected} type="button" class="btn btn-danger m-2">
                <RxCross2  className="icon" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>
              <button type="button" class="btn btn-outline-success">
                Approved
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>
              <button type="button" class="btn btn-outline-danger">
                Rejected <BsInfoCircle className="icon" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default MyView;
