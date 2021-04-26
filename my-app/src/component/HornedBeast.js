import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rate:0
        };

        }
        addRate=()=>{
            this.setState({
                rate:this.state.rate+1
            });
        }
    
        render (){
            return (
             <Card style={{ width: '30rem',margin:'3rem 37rem 3rem 30rem', color:'#325288' , textAlign:'center', border:'2px solid #114e60'}}>
             <Card.Img  src={this.props.image_url} />
             <Card.Body>
             <Card.Title>{this.props.title}</Card.Title>
             <Card.Text>
             {this.props.description}
             </Card.Text>
             <Card.Text>❤️
             {this.state.rate}
             </Card.Text>
             <Button  color='red' onClick={this.addRate}variant="primary">Rate</Button>
             </Card.Body>
             </Card>
             );  
         }
     }



export default HornedBeast;