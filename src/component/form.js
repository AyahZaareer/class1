import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HornedBeast from './HornedBeast';

class MyForm extends React.Component {

   update = horns => this.props.updateHorns(horns);
  submitForm = (event) => {
    event.preventDefault();
    this.props.filterData(event);
    return (
      <div>
        <HornedBeast
          title={this.props.title}
          image_url={this.props.image_url}
          description={this.props.description}
          viewBeast={this.props.viewBeast}
        />
      </div>
    );
  }


  render() {
    return (
      <Form onSubmit={this.submitForm} >
        <Form.Group>
          <Form.Label>how many Horn</Form.Label>
          <Form.Control onChange={this.update} name="numOfHorns"as="select" defaultValue="all">

            <option value="all">all</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>

          </Form.Control>
          <br />
          <Button variant="primary" type="submit">
                    Filter</Button>
        </Form.Group>

      </Form>
    );
  }
}

export default MyForm ;












