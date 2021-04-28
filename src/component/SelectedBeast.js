import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {


  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.closing}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.info.title}</Modal.Title>
          </Modal.Header>
          <Card.Img variant="top" style={{ width: '14rem' }} src={this.props.info.image_url} />
          <Modal.Body>
            <p>{this.props.info.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closing}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}



export default SelectedBeast;
