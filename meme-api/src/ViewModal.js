import {Button, ListGroup, Modal} from "react-bootstrap";
import React from "react";

const image = {

    // width: "100%",
    height: "280px"

};

const ViewModal = (props) => {

    const {item, showViewDetailModal, handleClose} = props
    return (
        <Modal size={"lg"} show={showViewDetailModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="card">
                    <img src={item.url} className="card-img-top" alt="..."
                         style={image}/>
                    <ListGroup>
                        <ListGroup.Item>Id: {item.id}</ListGroup.Item>
                        <ListGroup.Item>Name: {item.name}</ListGroup.Item>
                        <ListGroup.Item>Width: {item.width}</ListGroup.Item>
                        <ListGroup.Item>Height: {item.height}</ListGroup.Item>
                        <ListGroup.Item>Box Count: {item.box_count}</ListGroup.Item>
                        <ListGroup.Item>Link: {item.url}</ListGroup.Item>
                    </ListGroup>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )

}
export default ViewModal