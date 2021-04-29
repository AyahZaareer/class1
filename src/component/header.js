import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      beasts:''
    };
  }
  render() {
    return (
      <header>
        <h1>Gallery or Horn</h1>

      </header>

    );
  }
}

export default Header;
