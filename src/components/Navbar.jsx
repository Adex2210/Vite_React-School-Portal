import React from "react";
import StickyNav from "./StickyNav";
import MulticolorLine from "./MulticolorLine";
import Nav from "./Nav";
import FixedNav from "./FixedNav";

const Navbar = () => {

  // window.onscroll = function () {
  //   scrollFunction();
  // };

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     stickyNav.style.setProperty("top", "", "important");
  //   } else if (
  //     document.body.scrollTop < 20 ||
  //     document.documentElement.scrollTop < 20
  //   ) {
  //     stickyNav.style.setProperty("display", "none", "important");
  //   } else {
  //   }
  // }


  return (
    <>
    <FixedNav/>
      <section className="mx-auto"  id="stickyNav" style={{ width: "75%", height: "auto", position: 'sticky', top: '20px', zIndex: '5'}}>
      <div
        className="d-flex px-4 text-capitalize text-white"
        style={{
          height: "35px",
          marginTop: "60px",
          backgroundColor: "#495052",
        }}
      >
      <div className="d-flex w-100">
        <div className="d-flex gap-5 w-50 justify-content-start">
        <StickyNav name="our event" icon="fas fa-user"></StickyNav>
        <StickyNav name="news" icon="fas fa-edit"></StickyNav>
        <StickyNav name="+2347033959586" icon="fas fa-phone"></StickyNav>
        </div>
        <div className="d-flex gap-5 w-50 justify-content-end">
        <StickyNav name="languages" icon="fas fa-language" wh="/errorPage" ></StickyNav>
        <StickyNav name="register" icon="fas fa-circle-plus"  wh="/SignUp"></StickyNav>
        <StickyNav name="login" icon="fas fa-right-to-bracket" wh="/SignIn"></StickyNav>
        </div>
      </div>
      </div>
        <MulticolorLine/>
        <Nav/>
      </section>
    </>
  );
};

export default Navbar;
