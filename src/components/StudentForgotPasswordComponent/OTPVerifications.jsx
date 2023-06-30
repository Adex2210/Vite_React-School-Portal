import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import "./OTPVerification.css"
import { Link } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from 'notistack';
import { useDispatch, useSelector } from "react-redux";
import { myOTPVerify } from "../../redux/portalSlice";


const OTPVerifications = ({myOTP: myOTP, sentEmail: sentEmail }) => {
  return (
    <SnackbarProvider maxSnack={1} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} >
      <MyApp myOTP={myOTP} sentEmail={sentEmail}/>
    </SnackbarProvider>
  )
}


function MyApp({myOTP: myOTP, sentEmail: sentEmail }) {
  const [OTPInput, setOTPInput] = useState([0, 0, 0, 0]);
  const {enqueueSnackbar} = useSnackbar();
  const dispatch = useDispatch();

  const myEmailResponse = useSelector(
    (state) => state.portalReducer.emailVerify
  );


  function handleSubmit(e) {
    // console.log(OTPInput);
    // console.log(myOTP);
    if (Number(OTPInput.join("")) === myOTP) {
      dispatch(myOTPVerify(true))
      enqueueSnackbar('Verification successful. Click Nest step button to proceed', {variant: 'success'});
    } else {
      enqueueSnackbar('The provided OTP does not match. Please try again', {variant: 'error'});
    }
    e.preventDefault();
  }

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const handleChangeInput1 = (e) => {
    setOTPInput([e.target.value, OTPInput[1], OTPInput[2], OTPInput[3]]);

    if (e.target.value != "") {
      input2Ref.current.focus();
    }
  };

  const handleChangeInput2 = (e) => {
    setOTPInput([OTPInput[0], e.target.value, OTPInput[2], OTPInput[3]]);

    if (e.target.value != "") {
      input3Ref.current.focus();
    }
  };

  const handleChangeInput3 = (e) => {
    setOTPInput([OTPInput[0], OTPInput[1], e.target.value, OTPInput[3]]);

    if (e.target.value != "") {
      input4Ref.current.focus();
    }
  };
  return (
    <>
      <form className="otp-verification-form mx-auto shadow" onSubmit={handleSubmit}>

        <div className="otp-verification-info">
          <span className="otp-verification-title pb-3">
            OTP Verification
          </span>
          <p className="otp-verification-description">
            {" "}
            Please enter the code we just sent to {myEmailResponse}{" "}
          </p>
        </div>
        <div className="otp-verification-input-fields">
          <input
            className="otp-verification-input"
            placeholder=""
            type="password"
            maxLength="1"
            name="otpValue1"
            ref={input1Ref}
            onChange={handleChangeInput1}
          />
          <input
            className="otp-verification-input"
            placeholder=""
            type="password"
            maxLength="1"
            name="otpValue2"
            ref={input2Ref}
            onChange={handleChangeInput2}
          />
          <input
            className="otp-verification-input"
            placeholder=""
            type="password"
            maxLength="1"
            name="otpValue3"
            ref={input3Ref}
            onChange={handleChangeInput3}
          />
          <input
            className="otp-verification-input"
            placeholder=""
            type="password"
            maxLength="1"
            name="otpValue4"
            ref={input4Ref}
            onChange={(e) =>
              setOTPInput([
                OTPInput[0],
                OTPInput[1],
                OTPInput[2],
                e.target.value,
              ])
            }
          />
        </div>

        <div className="otp-verification-action-btns">
          <button className="otp-verification-verify" type="submit">
            Verify
          </button>
          <button className="otp-verification-clear" type="reset">
            Clear
          </button>
        </div>
        <p className="otp-verification-resend my-4">
          You don't receive the code ?
          <Link className="otp-verification-resend-action ms-4">Resend</Link>
        </p>
      </form>
    </>
  );
}

export default OTPVerifications;