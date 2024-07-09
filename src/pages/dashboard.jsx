import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
// import {
//   EnvironmentData,
//   RegionData,
//   CatlogData,
//   SchemaData,
//   TableData,
//   TargetData,
// } from "../pages/modalData";
import { ViewApi } from "../apis/ViewAPI";

const Dashboard = ({ options, onSelect }) => {

  const [show, setShow] = useState(false);
  const [region, setRegion] = useState([]);
  const [environment, setEnvironment] = useState([]);
  const [catlog, setCatlog] = useState([]);
  const [schema, setSchema] = useState([]);
  const [table, setTable] = useState([]);
  const [targetSchema, setTargetSchema] = useState([]);
  const [typeData, setTypeData] = useState([]);
  const [formData, setFormData] = useState({type_id: "1"});


  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    setShow(false);
    //call create view api
    // ViewApi.createView({
    //   "type_id": 2,
    //   "env_id": 1,
    //   "region_id": 1,
    //   "catelog_id": 6,
    //   "schema_id": 1,
    //   "table_id": 1,
    //   "target_schema_id": 1,
    //   "view_name": "creating the nww view 123"
    // });
    ViewApi.createView(formData)
  }
  const [selectedOption, setSelectedOption] = useState('1');

  const handleChange = (event) => {
    console.log("event = ", event.target.name);
    console.log("event = ", event.target.value);
    if (event.target.name === "type_id") {
      setSelectedOption(event.target.value);
    }
    formData[event.target.name] = event.target.value
    setFormData(formData)
    console.log("formData = ", formData)

  };
  useEffect(() => {
    formData["type_id"] = "1"
    setFormData(formData)
    ViewApi.getRegion().then((region) => {
      // response handling
      setRegion(region);
    });
    ViewApi.getEnvironment().then((env) => {
      // response handling
      setEnvironment(env);
    });

    ViewApi.getCatlog().then((catlog) => {
      // response handling
      setCatlog(catlog);
    });

    ViewApi.getSchema().then((schema) => {
      // response handling
      setSchema(schema);
    });
    ViewApi.getTable().then((table) => {
      // response handling
      setTable(table);
    });

    ViewApi.getTargetSchema().then((targetSchema) => {
      // response handling
      setTargetSchema(targetSchema);
    });
    ViewApi.getType().then((typeData) => {
      // response handling
      setTypeData(typeData);
    });
  }, []);
  // console.log("region = ", region)
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
                  {typeData?.data?.map((item) => {
                    return (
                      <Form.Check
                        type="radio"
                        name="type_id"
                        label={item.type_name}
                        value={item.id}
                        checked={selectedOption === "" + item.id}
                        onChange={handleChange}
                        className="me-3"
                      />
                    )
                  })
                  }

                  {/*                   
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
                  /> */}
                </div>
              </Form.Group>
              {/********* Drop Down ***********/}
              <Form.Label className="mt-3">Environment</Form.Label>
              <Form.Select
                arial-label="Environment example"
                onChange={handleChange}
                name="env_id"
              >
                <option>-select-</option>
                {environment.data?.map((option) => (
                  <option

                    key={option.id}
                    value={option.id}
                  // onClick={handleChange}
                  >
                    {option.environment_desc}
                  </option>
                ))}
              </Form.Select>
              <Form.Label className="mt-3">Region</Form.Label>
              <Form.Select arial-label="Region example"
                onChange={handleChange}
                name="region_id"
              >
                <option>-select-</option>
                {region.data?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.region_desc}
                  </option>
                ))}
              </Form.Select>
              <Form.Label className="mt-3">Source Catalog</Form.Label>
              <Form.Select
                arial-label="Catalog example"
                onChange={handleChange}
                name="catelog_id"
              >
                <option>-select-</option>
                {catlog.data?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.catelog_name}
                  </option>
                ))}
              </Form.Select>
              <Form.Label className="mt-3"> Schema</Form.Label>
              <Form.Select
                arial-label="Schema example"
                onChange={handleChange}
                name="schema_id"
              >
                <option>-select-</option>
                {schema.data?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.schema_name}
                  </option>
                ))}
              </Form.Select>

              <Form.Label className="mt-3">Table</Form.Label>
              <Form.Select
                arial-label="Table example"
                onChange={handleChange}
                name="table_id"
              >
                <option>-select-</option>
                {table.data?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.table_name}
                  </option>
                ))}
              </Form.Select>

              <Form.Label className="mt-3">Target Schema</Form.Label>
              <Form.Select
                arial-label="Target example"
                onChange={handleChange}
                name="target_schema_id"
              >
                <option>-select-</option>
                {targetSchema.data?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.schema_name}
                  </option>
                ))}
              </Form.Select>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Label> Target View</Form.Label>
                <Form.Control name="view_name" 
                onChange={handleChange}
                type="text"  placeholder="" />
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
                  <Button onClick={handleSubmit} className="Modal-button">
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
