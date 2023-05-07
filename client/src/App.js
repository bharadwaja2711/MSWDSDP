import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Navigation from './components/Navigation';
import About from './components/About';
import Bids from './components/Bids';
import Purchase from './components/Purchase'
import Payment from './components/Payment'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar } from '@material-ui/core';

function App({store}) {
  console.log(store.getState())
  function Page(){
    if(store.getState().NavReducer == "Login"){
      return(
        <div>
          <Login store={store} />
        </div>
      );
    }
    if(store.getState().NavReducer == "Registration"){
      return(
        <div>
          <Registration />
        </div>
      );
    }
    if(store.getState().NavReducer == "Bids"){
      return(
        <div>
          <Bids />
        </div>
      )
    }
    if(store.getState().NavReducer == "Purchase"){
      return(
        <div>
          <Purchase />
        </div>
      )
    }
    if(store.getState().NavReducer == "About"){
      return(
        <div>
          <About />
        </div>
      )
    }
    if(store.getState().NavReducer == "Payment"){
      return(
        <div>
          <Payment />
        </div>
      )
    }
  }
  return(
    <div className="App">

    <div className="App-header" style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100px", 
      backgroundColor: "black", /* change the background color */
      perspective: "800px", 
      transformStyle: "preserve-3d", 
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)", 
      padding: "10px", 
      borderRadius: "10px" 
    }}>
      <img src={logo} alt="BidZone logo" className="App-logo" style={{ 
        width: "70px", 
        height: "70px", 
        marginRight: "10px", 
        transition: "all 0.3s ease-in-out" 
      }} />
      <p style={{ 
        fontSize: "24px", 
        fontWeight: "bold", 
        color: "#fff", /* change the text color */
        margin: "0" 
      }}>BidZone</p>
    </div>

        <div className="App-body">
              <Container>
                <Navigation store={store} />
                <Page />
              </Container>
        </div>
      
    </div>
  );
}

export default App;