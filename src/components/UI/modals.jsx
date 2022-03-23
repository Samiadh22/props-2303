import { useState } from "react";
import {Button,Modal, Form } from  "react-bootstrap"
import Input from "./input"
export default function CustomModals({samia,Data}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
    
        <span  className="btn" onClick={handleShow} > <i class="fas fa-cogs"></i> </span>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input type='text' placeholder='firstname' defaultValue={samia.firstname} className='form-controls' label='Avatar' />
            <Input type='text' placeholder='lastname' defaultValue={samia.lastname} className='form-controls' label='Username'/>
            <Input type='text' placeholder='Email' defaultValue={samia.email} className='form-controls' label='Email' />
            <Input type='password' placeholder='password' defaultValue={samia.password} className='form-controls' label='password'/>
            <Form.Select aria-label="Default select example">
                <option selected disabled>{samia.roles[0].role} </option>
                {Data.map(el => <option value={el.roles[0].role} >{el.roles[0].role}</option> )}
                
            </Form.Select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
 