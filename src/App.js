import './App.css';
import React from 'react';
import DataJson from './assest/data.json';
import Main from './component/main';
import Header from './component/header';
import Footer from './component/footer';
import SelectedBeast from './component/SelectedBeast';
import MyForm from './component/form';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DataJson,
      show: false,
      info: {},
      numberOfHorns:''
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

  filterData = (event)=>{
    if(this.state.numberOfHorns !== 'all'){
      this.setState({data : DataJson.filter(obj=>obj.horns === Number(this.state.numberOfHorns))});
    }else{
      this.setState({data : DataJson});
    }


  }
  updateHorns=horns=>this.setState({numberOfHorns:horns.target.value});

  render() {
    return (
      <div>
        <Header />
        <MyForm filterData={this.filterData}
          numberOfHorns={this.numberOfHorns}
          updateHorns={this.updateHorns}
          data={this.state.data}/>

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

