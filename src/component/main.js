import React from 'react';
import HornedBeast from './HornedBeast';

import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  render() {
    return (
      <CardColumns>
        {this.props.data.map(animal => {
          return (
            < HornedBeast title={animal.title}
              image_url={animal.image_url}
              description={animal.description}
              viewBeast={this.props.viewBeast} />

          );
        })
        }
      </CardColumns>
    );


  }
}


export default Main;
