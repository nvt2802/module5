import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteCustomer } from './CustomerService';

function ModalConfirm(props) {
  const {show,handleClose,dataCustomerDelete,title,msg} = props;

  const deletedcustomer = async (id) => {
    await deleteCustomer(id);
    handleClose();
}

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure to delete Customer with name {dataCustomerDelete.name}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>deletedcustomer(dataCustomerDelete.id)}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConfirm;