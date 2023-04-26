import axios from "axios";
import React, { useEffect, useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";

import {
  Button,
  Col,
  Dropdown,
  Form,
  InputGroup,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import { Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import { EmpEditForm } from "./EmpEditForm";


const ManagerDashboard = () => {

  const [empData, setEmpData] = useState([]);
  const [empDataEdit, setEmpDataEdit] = useState('');
  const [modal, setModal] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  let active = 1;
  let items = [];

  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  useEffect(()=>{
    axios.get('http://localhost:8000/allEmployeeData')
    .then((response) => {
      if (response.data) {
        setEmpData(response.data);
      } else {
        console.warn(response);
      }
    })
    .catch(err => {
      console.error(err);
    });
  },[])

  const deleteData = async (email) => {
    axios.delete(`http://localhost:8000/deleteEmployee/${email}`)
    .then((response) => {
        if(response.data.msg){
          alert(response.data.msg)
          setTimeout(() => {
            window.location.reload()
          }, 3000);
          
        }else{
          alert(response.data.msg)
        }
    })
    .catch(err => {
    console.error(err);
    });
  }

  const empDataFunc = (item)=>{
    setEmpDataEdit(item)
  }

  return (
    <>
    <ChakraProvider>
    <div className="container-fluid">
      <div className="container">
        <Row className="mt-5 justify-content-center">
          <Col md={4}>
            <h3>- Manager's Dashboard - </h3>
          </Col>
        </Row>

        <Row className="mt-5 justify-content-end">
          <Col md={3}>
            <InputGroup>
              <Form.Control
                aria-label="Search…"
                placeholder="Search…"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <InputGroup.Text>
                <i className="fa-solid fa-magnifying-glass"></i>
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>

        <Modal isOpen={modal}  className="modal-dialog modal-lg">
          <ModalBody>
            <Row>
              <Col md={11}>
                <h3 style={{ textAlign: "center"}}>Employee's Data</h3>
              </Col>
              <Col md={1} className="justify-content-end">
                <i onClick={() => setModal(!modal)} style={{ cursor: "pointer" }} className="fa fa-remove"></i>
              </Col>
            </Row>

            <EmpEditForm employeeData={empDataEdit}/>
          </ModalBody>
        </Modal>

        <Row className="mt-3">
          <Col md={12}>
            <Table striped bordered hover className="history">
              <thead>
                <tr>
                  <th>Emp ID</th>
                  <th> Employee's Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Department</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
{ empData != [] ? (empData
                       ?.filter((val) => {
                        if (searchTerm === "") {
                          return val;
                        } else if (
                          val.empID
                            ?.toLowerCase()
                            .includes(searchTerm?.toLowerCase()) ||
                          val.email
                            ?.toLowerCase()
                            .includes(searchTerm?.toLowerCase()) ||
                          val.fname?.includes(searchTerm) ||
                          val.lname?.includes(searchTerm) ||
                          val.department?.includes(searchTerm) ||
                          val.category?.includes(searchTerm) ||
                          val.salary?.includes(searchTerm) ||
                          val.city
                            ?.toLowerCase()
                            .includes(searchTerm?.toLowerCase())
                        ) {
                          return val;
                        }
                      })
            
              .map((val, ind) =>{
                  return( <>
                    <tr key={ind}>
                      <td>{val._id}</td>
                      <td>{val.fname} {val.lname}</td>
                      <td>{val.email}</td>
                      <td>{val.gender}</td>
                      <td>{val.department}</td>
                      <td>{val.category}</td>
                      <td>{val.city}</td>
                      <td>{val.salary}</td>
                      <td>
                        <span onClick={() => {setModal(!modal)
                                             empDataFunc(val)}
                        } style={{ cursor: "pointer", color: "blue", padding: "4px", margin: "3px"}}><i className="fa-solid fa-pen-to-square"></i></span>
                        <span onClick={() => deleteData(val.email)} style={{ cursor: "pointer", color: "red", padding: "4px", margin: "3px"}}><i className="fa-solid fa-trash"></i></span>
                      </td>
                    </tr>  
                    </> )
                  })) : ""}
              </tbody>
            </Table>
            <Pagination size="sm" className="justify-content-end">
              {items}
            </Pagination>
          </Col>
        </Row>


      </div>
    </div>
    </ChakraProvider>
    </>
  );
}


export default ManagerDashboard;

