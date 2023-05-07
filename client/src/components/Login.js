import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { checkboxClasses } from '@mui/material';
import Home from './Home';

function Login({ store }) {
  const [login, setLogin] = useState(null);
  const [un, setUn] = useState(null);
  const [pw, setPw] = useState(null);

  function handleForm(event) {
    alert("form submitted");
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setUn(data.get("un"));
    setPw(data.get("pw"));

    axios.get('http://localhost:8081/check', {
      params: {
        un: data.get("un"),
        pw: data.get("pw")
      }
    })
    .then((res) => {
      console.log(res.data);
      setLogin(res.data);
    });
  }

  const loginContainerStyle = {
    background: "url('https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg')",
    backgroundSize: "cover",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.75), inset 0px 0px 10px 2px rgba(255,255,255,0.5)",
    padding: "20px",
    width: "400px",
    margin: "0 auto",
    marginTop: "50px"
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const inputStyle = {
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.25)"
  };

  const submitButtonStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    background: "#0077b6",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
    boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.25)",
    ":hover": {
        backgroundColor: "#005f8b",
    },
};


  if ((login === null || login === 'FAIL') && (store.getState().AuthReducer[0] == null)) {
    return (
      <div className="App-login" style={loginContainerStyle}>
        <form onSubmit={handleForm} style={formStyle}>
          <h2 style={{ color: "white", textAlign: "center" }}>Login</h2>
          <label style={{ color: "white", marginBottom: "10px" }}>User Name:</label>
          <input type="text" placeholder='un' name="un" style={inputStyle} />
          <label style={{ color: "white", marginBottom: "10px" }}>Password:</label>
          <input type="password" placeholder='pw' name="pw" style={inputStyle} />
          <input type="submit" value="Login" style={submitButtonStyle} />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <Home un={un} pw={pw} store={store} />
      </div>
    );
  }
}

export default Login;
