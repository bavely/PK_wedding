import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Arabic from "../../utils/helpers/Arabic";
import 'animate.css';

export default function Navbar(props) {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState("");

  const handleScroll = (e)=>{
     

      if(window.scrollY >= 400 || window.scrollY >= 160){
setScroll("navbarscroll")
      }else{
        setScroll("")
      }
    
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="row mb-3 navsec">
      <div className="col navcol">
<nav className={`navbar  ${scroll}  navbar-expand-lg`}>
      <div className="col-md-4 offset-md-3 pr-2 navi">
    <a className="navbar-brand" href="#">Pavli &#10084;&#65039; Christina</a>
    </div>
    <div className="col-md-3 offset-md-2 pl-2 navi">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <button
          type="button"
          onClick={() => {
            localStorage.setItem("type", "loggedin/false");
            return navigate("/");
          }}
          className=" btn btn-danger nav-link "
          style={{color: "white"}}
        >
          Logout
        </button>
      
      </div>
      </div>
    </div>
 
</nav>

      </div>
      <div className="row welsec"> 
     <div className="col-md-6 offset-md-4 animate__animated animate__fadeInDown animate__delay-1s">
      <p className="welmsg "><span style={{fontWaidgt:"bold", color:"red"}}>&#9829;&#65039;</span> {Arabic.welcome} <span style={{fontWaidgt:"bold", color:"red"}}>&#9829;&#65039;</span> {Arabic.pk} </p>
<p className="welmsg ">Welcome to <span style={{fontWaidgt:"bold", color:"red"}}>&#9829;&#65039;</span> Pavli & Koki's <span style={{fontWaidgt:"bold", color:"red"}}>&#9829;&#65039;</span> wedding official website.</p>
     </div>
     </div>
    </div>
  );
}
