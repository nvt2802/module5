import axios from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteBook } from './BookService';

const ModalConfirm = (props) => {
        const{show,handleClose,dataBookDelete}=props
        const deletedBook = async (id) => {
            const result = await deleteBook(id);
            handleClose();
        
        }
  return (
    <div>
          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to delete book, name = {dataBookDelete.title} ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>deletedBook(dataBookDelete.id)}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalConfirm;