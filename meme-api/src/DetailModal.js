import {Button, ListGroup, Modal} from "react-bootstrap";
import React, {useState} from "react";

const image = {

    width: "100%",
    height: "280px"

};

const DetailModal = (props) => {

    const {item, showDetailModal, handleClose,handleViewShow} = props
    return (
        <Modal size={"lg"} show={showDetailModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="card">
                    <img src={item.url} className="card-img-top" alt="..."
                         style={image}/>
                    <ListGroup>
                        <ListGroup.Item>Name: {item.name}</ListGroup.Item>
                        <ListGroup.Item><Button onClick={handleViewShow}>Find More</Button></ListGroup.Item>
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
export default DetailModal