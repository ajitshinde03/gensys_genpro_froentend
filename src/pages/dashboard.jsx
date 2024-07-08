import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import {
  EnvironmentData,
  RegionData,
  CatlogData,
  SchemaData,
  TableData,
  TargetData,
} from "../pages/modalData";

const Dashboard = ({ options, onSelect }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedOption, setSelectedOption] = useState("GenSys");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div class="main-container">
        <div className="d-flex cornerview">
          <Button className="custom-button" size="x-lg" onClick={handleShow}>
            Add View
          </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <Form>
              <Modal.Title>Add New View </Modal.Title>
              <br />

              <Form.Group className="mb-3" controlId="formBasicRadio">
                <div className="d-flex">
                  <Form.Check
                    type="radio"
                    label="GenSys"
                    value="GenSys"
                    checked={selectedOption === "GenSys"}
                    onChange={handleChange}
                    className="me-3"
                  />
                  <Form.Check
                    type="radio"
                    label="GenPro"
                    value="GenPro"
                    checked={selectedOption === "GenPro"}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
              {/********* Drop Down ***********/}
              <Form.Label className="mt-3">Environment</Form.Label>
              <Form.Select
                arial-label="Environment example"
                onChange={onSelect}
              >
                <option>-select-</option>
                {EnvironmentData.data.map((option) => (
                  <option key={option.id} value={option.environment_name}>
                    {option.environment_desc}
                  </option>
                ))}
              </Form.Select>
              <Form.Label className="mt-3">Region</Form.Label>
              <Form.Select arial-label="Region example">
                <option>-select-</option>
                {RegionData.data.map((option) => (
                  <option key={option.id} value={option.region_name}>
                    {option.region_desc}
                  </option>
                ))}
              </Form.Select>
              <Form.Label className="mt-3">Source Catalog</Form.Label>
              <Form.Select arial-label="Catalog example">
                <option>-select-</option>
                {CatlogData.data.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.catelog_name}
                  </option>
                ))}
              </Form.Select>
              <Form.Label className="mt-3"> Schema</Form.Label>
              <Form.Select arial-label="Schema example">
                <option>-select-</option>
                {SchemaData.data.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.schema_name}
                  </option>
                ))}
              </Form.Select>
              <Form.Label className="mt-3">Table</Form.Label>
              <Form.Select arial-label="Table example">
                <option>-select-</option>
                {TableData.data.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.table_name}
                  </option>
                ))}
              </Form.Select>
              <Form.Label className="mt-3">Target Schema</Form.Label>
              <Form.Select arial-label="Target example">
                <option>-select-</option>
                {TargetData.data.map((option) => (
                  <option key={option.id} value={option.catelog_name}>
                    {option.catelog_name}
                  </option>
                ))}
              </Form.Select>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Target View</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="md-3">
                <div className="d-flex end-button ">
                  <Button
                    variant="link"
                    className="custom-dropdown-item"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button onClick={handleClose} className="Modal-button">
                    Submit
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Dashboard;
