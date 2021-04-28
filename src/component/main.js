import React from 'react';
import HornedBeast from './HornedBeast';

import CardColumns from 'react-bootstrap/CardColumns';
import data from '../assest/data.json';




class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data

    };
  }

  render() {
    return (
      <CardColumns>
        {this.state.data.map(animal => {
          return (


            < HornedBeast title={animal.title}
              image_url={animal.image_url}
              description={animal.description} />
          );
        })
        }
      </CardColumns>
    );


  }
}


export default Main;
