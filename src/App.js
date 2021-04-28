import './App.css';
import React from 'react';
import DataJson from './assest/data.json';
import Main from './component/main';
import Header from './component/header';
import Footer from './component/footer';
import SelectedBeast from './component/SelectedBeast';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DataJson,
      show: false,
      info: {}
    };
  }
  viewBeast = (beast) => {
    this.setState({
      show: true,
      info: beast
    });
  }
  closing = () => {
    this.setState({
      show: false,
      info: {}
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Main data={this.state.data} viewBeast={this.viewBeast} />
        <SelectedBeast show={this.state.show}
          info={this.state.info}
          closing={this.closing}/>
        <Footer />
      </div>
    );
  }
}


export default App;

