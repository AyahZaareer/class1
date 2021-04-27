import React from 'react';
import Main from './component/main';
import Header from './component/header';
import Footer from './component/footer';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer />
      </div>
    );
  }
}


export default App;

