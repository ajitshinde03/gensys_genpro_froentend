import React from "react";
import { BsSearch, BsInfoCircle } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { GoCheck } from "react-icons/go";

const MyView = () => {
  return (
    <div className="container m-4">
      <h6 className="mt-4">Last Updated : 10:00:00 AM</h6>
      <h2>All Request</h2>
      <div className="d-flex my-4" style={{ width: "72rem" }}>
        <input
          class="form-control"
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
          <div class="card-body d-flex">
            <div className="mx-4">
              <span className="d-flex">
                <IoIosMenu className="icon" />
                <h5>100</h5>
              </span>
              <h6>All Request</h6>
            </div>

            <div className="mx-4">
              <span className="d-flex">
                <IoMdTime className="icon" />
                <h5>100</h5>
              </span>
              <h6>Pending</h6>
            </div>

            <div className="mx-4">
              <span className="d-flex">
                <GoCheck className="icon" />
                <h5>100</h5>
              </span>
              <h6>Approved</h6>
            </div>

            <div className="mx-4">
              <span className="d-flex">
                <RxCross1 className="icon" />
                <h5>100</h5>
              </span>
              <h6>Rejected</h6>
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
              <button type="button" class="btn btn-success m-2">
                <GoCheck className="icon" />
              </button>
              <button type="button" class="btn btn-danger m-2">
                <RxCross1 className="icon" />
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
