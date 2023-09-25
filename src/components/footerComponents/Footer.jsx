import React, { useEffect, useState } from "react";
import FooterHeader from "./FooterHeader";
import OurTagBtn from "./OurTagBtn";
import FooterGallary from "./FooterGallary";
import FooterReachBtn from "./FooterReachBtn";
import Contact_Us_Form from "./Contact_Us_Form";
import FooterHero from "./FooterHero";
import Small_hr from "../generalComponents/Small_hr";
import MulticolorLine from "../generalComponents/MulticolorLine";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@mantine/carousel";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import FooterCarousel from "./FooterCarousel";




const galleryImages1 = [
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435026/images_13_s6nfrc.jpg",
    imageName:"" 
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435006/images_4_qwldyn.jpg",
    imageName:""
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435027/images_16_mydc4f.jpg",
    imageName:""
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435027/images_19_ap7ihu.jpg",
    imageName:""
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435027/images_18_xjzpbq.jpg",
    imageName:""
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435026/images_14_esjffp.jpg",
    imageName:""
  },
]

const galleryImages2 = [
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694508881/our-history_oadezh.jpg",
    imageName: "Image 2",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694508881/our-history_oadezh.jpg",
    imageName: "Image 2",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694508881/our-history_oadezh.jpg",
    imageName: "Image 2",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694508881/our-history_oadezh.jpg",
    imageName: "Image 2",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694508881/our-history_oadezh.jpg",
    imageName: "Image 2",
  },
  {
    image: "https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694508881/our-history_oadezh.jpg",
    imageName: "Image 2",
  },
  
];


const Footer = ({ contactUsRef }) => {

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedImages, setSelectedImages] = useState(galleryImages1);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup by removing event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const navigate = useNavigate();

  const primarySchool = (para) => {
    if (para == "call") {
      window.open("tel:+2347033959586");
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "warning",
        title: "Currently Unavailable, Please Try Again Later",
      });
    }
  };

  const toRespectiveLocation = (para) => {
    if (para == "teacher") {
      navigate("/ourteachers");
    } else if (para == "courses") {
      navigate("/our_courses");
    } else if (para == "events") {
      navigate("/ourevent");
    } else if (para == "secondary") {
      navigate("/");
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "warning",
        title: "Currently Unavailable, Please Try Again Later",
      });
    }
  };

 

  const modalStyles = {
    modal: {
      width: "400px !important",
    },
  };


  const handleClick = (images) => {
    setSelectedImages(images);
    open()
  };


  return (
    <>
      <div
        className=" w-100"
        style={{ backgroundColor: "#495052", paddingBottom: "50px" }}
      >
        <MulticolorLine />
        <div
          className="top-footer mx-auto d-flex gap-4 w-75"
          style={{ paddingTop: "50px" }}
        >
          <div className="each-footer text-white" style={{ width: "25%" }}>
            <FooterHeader
              headerClasses="text-uppercase"
              headerName="our primary school"
              headerStyle={{ color: "white" }}
            ></FooterHeader>
            <Small_hr
              hr_class="my-3"
              hr_style={{
                height: "3px",
                backgroundColor: "white",
                width: "35px",
              }}
            ></Small_hr>
            <div>
              Welcome to Our Primary School, where learning is an exciting
              adventure every day! 🌟 Our school is a place filled with
              laughter, curiosity, and endless opportunities to grow and
              explore. 📚🌈
            </div>
            <div className="d-flex mt-3 gap-3">
              <FooterReachBtn
                btn_classes="bt orange"
                classes="fas fa-envelope text-white"
                icon="msg"
                onClick={() => primarySchool("msg")}
              ></FooterReachBtn>
              <FooterReachBtn
                btn_classes="bt yellow"
                classes="fas fa-home "
                onClick={() => primarySchool("home")}
              ></FooterReachBtn>
              <FooterReachBtn
                btn_classes="bt pink"
                classes="fas fa-phone"
                onClick={() => primarySchool("call")}
              ></FooterReachBtn>
            </div>
          </div>
          <div className="each-footer" style={{ width: "25%" }}>
            <FooterHeader
              headerClasses="text-uppercase"
              headerName="our tag"
              headerStyle={{ color: "white" }}
            ></FooterHeader>
            <Small_hr
              hr_class="my-3"
              hr_style={{
                height: "3px",
                backgroundColor: "white",
                width: "35px",
              }}
            ></Small_hr>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex gap-3 flex-wrap w-100">
                <OurTagBtn
                  onClick={() => toRespectiveLocation("teacher")}
                  btn_txt="teacher"
                ></OurTagBtn>
                <OurTagBtn
                  onClick={() => toRespectiveLocation("courses")}
                  btn_txt="courses"
                ></OurTagBtn>
                <OurTagBtn
                  onClick={() => toRespectiveLocation("events")}
                  btn_txt="events"
                ></OurTagBtn>
                <OurTagBtn
                  onClick={() => toRespectiveLocation("nursery")}
                  btn_txt="nursery"
                ></OurTagBtn>
                <OurTagBtn
                  onClick={() => toRespectiveLocation("primary")}
                  btn_txt="primary"
                ></OurTagBtn>
                <OurTagBtn
                  onClick={() => toRespectiveLocation("secondary")}
                  btn_txt="secondary"
                ></OurTagBtn>
              </div>
            </div>
          </div>
          <div className="each-footer" style={{ width: "25%" }}>
            <FooterHeader
              headerClasses="text-uppercase"
              headerName="school gallery"
              headerStyle={{ color: "white" }}
            ></FooterHeader>
            <Small_hr
              hr_class="my-3"
              hr_style={{
                height: "3px",
                backgroundColor: "white",
                width: "35px",
              }}
            ></Small_hr>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex gap-3">
                <FooterGallary
                  img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435006/images_4_qwldyn.jpg"
                  cover="Image 1"
                  cover_img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435006/images_4_qwldyn.jpg"
                  onClick={() => handleClick(galleryImages1)}
                ></FooterGallary>
                <FooterGallary
                  img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694508881/our-history_oadezh.jpg"
                  cover="Image 2"
                  cover_img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694508881/our-history_oadezh.jpg"
                  onClick={() => handleClick(galleryImages2)}
                ></FooterGallary>
                <FooterGallary
                  img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435026/images_8_qedp5t.jpg"
                  cover="Image 3"
                  cover_img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435026/images_8_qedp5t.jpg"
                  onClick={() => handleClick(galleryImages3)}
                ></FooterGallary>
              </div>
              <div className="d-flex gap-3">
                <FooterGallary
                  img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435026/images_11_h7kiqj.jpg"
                  cover="Image 4"
                  cover_img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435026/images_11_h7kiqj.jpg"
                  onClick={() => handleClick(galleryImages4)}
                ></FooterGallary>
                <FooterGallary
                  img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1681986706/samples/imagecon-group.jpg"
                  cover="Image 5"
                  cover_img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1681986706/samples/imagecon-group.jpg"
                  onClick={() => handleClick(galleryImages5)}
                ></FooterGallary>
                <FooterGallary
                  img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435025/images_5_m9uf3f.jpg"
                  cover="Image 6"
                  cover_img="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435025/images_5_m9uf3f.jpg"
                  onClick={() => handleClick(galleryImages6)}
                ></FooterGallary>
              </div>
            </div>
          </div>
          <div className="each-footer" style={{ width: "25%" }}>
            <FooterHeader
              headerClasses="text-uppercase"
              headerName="contact us"
              headerStyle={{ color: "white" }}
            ></FooterHeader>
            <Small_hr
              hr_class="my-3"
              hr_style={{
                height: "3px",
                backgroundColor: "white",
                width: "35px",
              }}
            ></Small_hr>
            <Contact_Us_Form contactUsRef={contactUsRef} />
          </div>
        </div>

        <div className="mx-auto d-flex gap-4 w-100 mt-5">
          <FooterHero></FooterHero>
        </div>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        title="School Gallary"
        centered
        size={`${isSmallScreen ? '100%' : '70%'} `}
      >
        <FooterCarousel images={selectedImages}/>
      </Modal>
    </>
  );
};

export default Footer;
