import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Routes from './routes.jsx';

class App extends Component {
  
  showComponents(){
    let sideBar = document.querySelector('.side-bar');
      sideBar.classList.toggle('show-side-bar');
  }
    
    render() {
      return (
        <div className="container">
          <header className="App-header">
            <h1 className="App-title"><span className="oneText">One</span>Lang</h1>
            <span className="icon" onClick={this.props.isAuthenticated ? this.showComponents:'#'}>&#9776;</span>
          </header>
          <Routes/>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
      return {
          isAuthenticated: state.currentUser.isAuthenticated,
      };
  };

export default connect(mapStateToProps, null)(App);
