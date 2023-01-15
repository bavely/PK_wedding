import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import CommonHelper from '../utils/helpers/CommonHelper';
// import "../utils/styles/Style.css";

function Login() {
  // let auth = useSelector((state) => state.loggedin);
  // let user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const [msg, setMsg] = useState('');

  if (localStorage.getItem('type') !== undefined){
    dispatch({
      type: localStorage.getItem('type'),
      user: localStorage.getItem('user'),
    });
  }
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const hanleSubmit = (event) => {
    event.preventDefault();

    if (formData.password === '05020303') {
      
      localStorage.setItem('type', 'loggedin/true');
      localStorage.setItem('user', formData.name);
      return navigate('/home');
    } else {

      localStorage.setItem('type', 'loggedin/false');
          localStorage.setItem('user', '');
      setMsg(
        'Can you please try again? Our date of birth is incorrect. تاريخ الميلاد غير صحيح'
      );
    }
  };

  return (

    <div className="container-fluid s">
  <div className="row justify-content-md-center">
    {/* <div className="col col-lg-2" >
      
    </div> */}
    <div className="col-md-6 position-relative mt-5">
    <div className="card position-relative bottom-0 top-50 start-50  translate-middle shadow-lg" style={{backgroundColor:"rgba(90, 90, 90, 0.4)"}}>
  <div className="card-header text-center p">
  LogIn / تسجيل الدخول
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
    <form className="row g-3 " onSubmit={hanleSubmit}>
    <div className="col-md-12 ">
      {msg === '' ? (
        <></>
      ) : (
        <div className="alert alert-danger " role="alert">
          {msg}
        </div>
      )}
    </div>
    <div className="col-md-12 p">
      <div  role="alert">
        Please enter our date of births (Koki first
        then Pavli days and months only) 05020303.
        <br />
        بعد اذن حضرتك اكتب/ي تاريخ ميلادنا (كوكي
        الاول و بعد كده بافلي ايام و شهور فقط)
        <br />
      </div>
    </div>
    {/* <div className="col-md-12 p">
      <label htmlFor="name" className="form-label ">
        Name / اسم حضرتك
      </label>
      <input
        type="text"
        className="form-control "
        id="name"
        name="name"
        onChange={handleChange}
        placeholder="Enter your name"
      />
    </div> */}
    <div className="col-md-12 p float-end" >
      <label htmlFor="password" className="form-label ">
        DOB / تاريخ الميلاد
      </label>
      <input
        type="password"
        className="form-control "
        id="password"
        name="password"
        onChange={handleChange}
        placeholder="MMDDMMDD"
      />
    </div>
    <div className="col-12">
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </div>
  </form>
  </blockquote>
  </div>
</div>
    </div>
    {/* <div className="col col-lg-2 mb-5" style={{hight:"10vh", minHight:"10vh"}}>
      
    </div> */}
  </div>
</div>
  );
}

export default Login;
