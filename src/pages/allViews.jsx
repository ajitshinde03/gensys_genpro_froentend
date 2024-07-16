import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { BsSearch } from "react-icons/bs";
import { AllRequestApi } from "../apis/allRequestApi";

const AllViews = () => {
  const [requestData, setRequestData] = useState({});

  const callApi = async () => {
    const responce = await Promise.all([AllRequestApi.getRequestData()]);
    setRequestData(responce[0]);
  };
  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <div className="main-container m-4">
        <h6 className="mt-2 last_update">Last Updated : 10:00:00 AM</h6>
        <div className="row">
          <div className="col-lg-2 col-md-2">
            <h2>All Views</h2>
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
        <Table
          class="table table-responsive table-bordered"
          variant="bordered"
          responsive
        >
          <thead class="thead-light thead-light_blue">
            <tr>
              <th>Target View Name</th>
              <th>Target Schema Name</th>
              <th>Catelog</th>
              <th>Schema</th>
              <th>Table</th>
              <th>ENvironment</th>
              <th>Type</th>
              <th>Region</th>
              <th>Created Date</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {requestData?.data?.map((data) => {
              return (
                <tr>
                  <td>{data.view_name}</td>
                  <td>{data.target_schema_name}</td>
                  <td>{data.catelog_name}</td>
                  <td>{data.schema_name}</td>
                  <td>{data.table_name}</td>
                  <td>{data.env_name}</td>
                  <td>{data.type_name}</td>
                  <td>{data.region_name}</td>
                  <td>{data.created_date}</td>
                  <td>{data.updated_date}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AllViews;
