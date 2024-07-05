import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

const Dashboard = () => {
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
              <Form.Select arial-label="Dropdown example">
                <option>-select-</option>
                <option>Environment 1</option>
                <option>Environment 2</option>
                <option>Environment 3</option>
              </Form.Select>
              <Form.Label className="mt-3">Region</Form.Label>
              <Form.Select arial-label="Dropdown example">
                <option>-select-</option>
                <option>Region 1</option>
                <option>Region 2</option>
                <option>Region 3</option>
              </Form.Select>
              <Form.Label className="mt-3">Source Catalog</Form.Label>
              <Form.Select arial-label="Dropdown example">
                <option>-select-</option>
                <option>Catalog 1</option>
                <option>Catalog 2</option>
                <option>Catalog 3</option>
              </Form.Select>
              <Form.Label className="mt-3"> Schema</Form.Label>
              <Form.Select arial-label="Dropdown example">
                <option>-select-</option>
                <option>Schema 1</option>
                <option>Schema 2</option>
                <option>Schema 3</option>
              </Form.Select>
              <Form.Label className="mt-3">Table</Form.Label>
              <Form.Select arial-label="Dropdown example">
                <option>-select-</option>
                <option>Table 1</option>
                <option>Table 2</option>
                <option>Table 3</option>
              </Form.Select>
              <Form.Label className="mt-3">Target Schema</Form.Label>
              <Form.Select arial-label="Dropdown example">
                <option>-select-</option>
                <option>Schema 1</option>
                <option>Schema 2</option>
                <option>Schema 3</option>
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
