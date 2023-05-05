import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
const addImage = () => {
  const history = useHistory();
  const close = () => {
    history.push("/edit");
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default addImage;
