import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 0
    };

  }
  addRate = () => {
    this.setState({
      rate: this.state.rate + 1
    });
  }
  display=()=>{
    this.props.viewBeast(this.props);
    this.setState({
      rate: this.state.rate + 1

    });

  }

  render() {
    return (
      <Card style={{ width: '20rem', color: '#0064ED', textAlign: 'center', border: '2px solid #00ADBE' }}>
        <Card.Img onClick={this.display} style={{width: '19rem'}} src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Card.Text>💙{this.state.rate}</Card.Text>
          <Button onClick={this.addRate} variant="primary">Rate</Button>
        </Card.Body>
      </Card>
    );
  }

}



export default HornedBeast;

