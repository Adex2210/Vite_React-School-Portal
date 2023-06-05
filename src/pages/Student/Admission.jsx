import React, { useEffect } from "react";
import { Link, NavLink, Route, Router, Routes } from "react-router-dom";
import PickClass from "./PickClass";
import Payment from "./Payment";
import { useDispatch, useSelector } from "react-redux";
import PersonalInformation from "./PersonalInformation";
import Education from "./Education";
import Referees from "./Referees";
import axios from "axios";



const Admission = () => {
  const dispatch = useDispatch()
  const globalState = useSelector((state)=>state.portalReducer.staffInfo)
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  useEffect(() => {
    let endpoint = "http://localhost:2000/student_account/student"
    axios.get(endpoint)
    .then((res) => {
      dispatch(newStudent(res.data.response));
      console.log(res.data.response)
    })
   
  }, [])
  
  return (
    <>
      <div className="font-bold ml-4 my-auto text-lg text-danger">{globalState.firstName} {globalState.lastName}</div>
      {/* <div
        className="d-flex gap-4"
        style={{ width: "100%", overflowX: "auto" }}
      >
        <NavLink style={navLinkStyles} to="pick_class" className="">Pick Class</NavLink>
        <NavLink style={navLinkStyles} to="payment">Payment</NavLink>
        <NavLink style={navLinkStyles} to="personal_information">Personal Information</NavLink>
        <NavLink style={navLinkStyles} to="education">Education</NavLink>
        <NavLink style={navLinkStyles} to="referees">Referees</NavLink>
      </div>
      <hr /> */}
      <div>
        <Routes>
          <Route path="pick_class" element={<PickClass />} />
          <Route path="payment" element={<Payment/>} />
          <Route path="personal_information" element={<PersonalInformation/>} />
          <Route path="education" element={<Education/>} />
          <Route path="referees" element={<Referees/>} />
        </Routes>
      </div>
    </>
  );
};

export default Admission;
