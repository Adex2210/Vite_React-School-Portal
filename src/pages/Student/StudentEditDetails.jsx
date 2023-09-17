// import axios from "axios";
// import { useFormik } from "formik";
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { BsFillEmojiSmileFill } from "react-icons/bs";
// import { Textarea } from "@mantine/core";
// import { useLocation } from "react-router-dom";
// import Chat from "../../components/studentDashboardComponents/Chat";
// import ChatMessenger from "../../components/studentDashboardComponents/ChatMessenger";
// import "../Student/StudentEditDetails.css";
// // import { useSelector } from "react-redux";

// const StudentEditDetails = ({ socket }) => {
//   const globalState = useSelector((state) => state.portalReducer.studentInfo);

//   const location = useLocation();
//   const id = new URLSearchParams(location.search).get("id");
//   const name = new URLSearchParams(location.search).get("name");
//   // const [message, setMessage] = useState("");
//   const [allmessages, setAllmessages] = useState([]);
//   const [classIndex, setClassIndex] = useState(0);
//   // let index = '';

//   useEffect(() => {
//     localStorage.getItem("myRoom");
//     if (socket.current) {
//       // console.log(socket.current);
//       socket.current.on("received_message", (receivedMessage) => {
//         console.log(receivedMessage);
//         setAllmessages([...allmessages, receivedMessage]);
//       });
//     }

//     //
//   });

//   const fetch = () => {
//     console.log("fetching");
//     // if(allmessages.length == 0) {
//     axios
//       .post("http://localhost:2000/student_account/get_student_message", {
//         class: classIndex,
//       })
//       .then((res) => {
//         console.log(res);
//         setAllmessages(res.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     // }
//   };

//   const fetchGroupMessage = () => {
//     if (localStorage.myRoom == "JSS 1 Group" && globalState.level == "JSS 1") {
//       setClassIndex(0);
//       // index = 0
//       fetch();
//     } else if (
//       localStorage.myRoom == "JSS 2 Group" &&
//       globalState.level == "JSS 2"
//     ) {
//       setClassIndex(1);
//       fetch();
//     } else {
//       // setAllmessages([])
//     }
//   };

//   // const sendMessage = () => {
//   //   let payload = {
//   //     message: message,
//   //     name: name,
//   //     messageDate: new Date().toLocaleDateString("en-GB", {
//   //       year: "2-digit",
//   //       month: "2-digit",
//   //       day: "2-digit",
//   //     }),
//   //     messageTime: new Date().toLocaleTimeString("en-US", {
//   //       hour12: false,
//   //       hour: "2-digit",
//   //       minute: "2-digit",
//   //     }),
//   //     picture: localStorage.cloudImage,
//   //     id: id,
//   //   };
//   //   socket.current.emit("sentMsg", payload);
//   //   setAllmessages([...allmessages, payload]);
//   // };

//   return (
//     <>
//       <div className="d-flex w-100 h-100">
//         <Chat
//           socket={socket}
//           messages={allmessages}
//           fetchGroupMessage={fetchGroupMessage}
//         />
//       </div>
//     </>
//   );
// };

// export default StudentEditDetails;

import React, { useEffect, useState } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import { Stepper, Button, Group } from "@mantine/core";
import Personal from "../../components/studentProfileComponents.jsx/Personal";
import { FaUserCheck } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import Contact from "../../components/studentProfileComponents.jsx/Contact";
import Referee from "../../components/studentProfileComponents.jsx/Referee";
import { BiSolidEdit } from "react-icons/bi";
import { FaSave } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./StudentEditDetails.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import EachInfo from "../../components/studentProfileComponents.jsx/EachInfo";



const StudentEditDetails = () => {

  // const [edit, setEdit] = useState(true);
  // const [enabled, setEnabled] = useState(false);

  // const handleEditDetails = () => {
  //   setEdit(false);
  //   setEnabled(true);
  // };


  return (
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <MyApp />
    </SnackbarProvider>
  );
};

function MyApp() {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const { enqueueSnackbar } = useSnackbar();
  const [allCountry, setAllCountry] = useState([]);
  const [statesForCountry, setStatesForCountry] = useState([]);
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [edit, setEdit] = useState(true);
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {}, []);

  const [active, setActive] = useState(0);
  const nextStep = (variant) =>
    setActive((current) => (current < 3 ? current + 1 : current));

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));


    
  useEffect(() => {
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/staff_account/countries";
    axios
      .get(endpoint)
      .then((response) => {
        setAllCountry(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;

    // Find the selected country's states from the fetched data
    const selectedCountryData = allCountry.find(
      (countryData) => countryData.country === selectedCountry
    );
    

    // If the selectedCountryData is found, set the states
    if (selectedCountryData) {
      setStatesForCountry(selectedCountryData.states);
    } else {
      // If the selectedCountryData is not found, clear the states
      setStatesForCountry([]);
    }
  };




    const editMyDetails = () => {
      handleEditDetails(); 
      if (enabled && !edit) {
  
      }
  }

  return (
    <>
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        className="p-4"
        style={{ backgroundColor: "", width: "100%", height: "100%" }}
        color=""
      >
        <Stepper.Step
          label=""
          icon={<FaUserCheck size="1.1rem" />}
          description="Personal"
        >
        <div className="w-100 d-flex flex-wrap gap-4">
        <EachInfo label="Surname" value={globalState.lastName} onChange={(e) => setLastName(e.target.value)} enabled={enabled}/>
        <EachInfo label="First Name" value={globalState.firstName} enabled={enabled}/>
        <EachInfo label="Middle name" value={globalState.middleName} enabled={enabled}/>
        <EachInfo label="Age" value={globalState.age} enabled={enabled}/>
        <div className="each-info" style={{ width: "48%" }}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 0, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              disabled={!enabled}
              id="standard-select-currency"
              select
              label="Nationality"
              name="country"
              defaultValue={globalState.country || ''}
              variant="standard"
              onChange={(e) => {
                handleCountryChange(e); // Call the custom event handler
              }}
            >
              {allCountry
                .slice() // Create a copy to avoid modifying the original array
                .sort((a, b) => a.country.localeCompare(b.country)) // Sort alphabetically
                .map((eachCountry, index) => (
                  <MenuItem key={eachCountry.id} value={eachCountry.country}>
                    {eachCountry.country}
                  </MenuItem>
                ))}
            </TextField>
          </Box>
        </div>

        <div className="each-info" style={{ width: "48%" }}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 0, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              disabled={!enabled}
              id="standard-select-currency"
              select
              label="State of origin"
              name="state"
              defaultValue={globalState.state || ''}
              variant="standard"
            >
              {statesForCountry.length === 0 && globalState.state ? (
                <MenuItem value={globalState.state}>
                  {globalState.state}
                </MenuItem>
              ) : null}
              {statesForCountry
                .slice() // Create a copy to avoid modifying the original array
                .sort() // Sort the array alphabetically
                .map((selectedState) => (
                  <MenuItem key={selectedState} value={selectedState}>
                    {selectedState}
                  </MenuItem>
                ))}
            </TextField>
          </Box>
        </div>
        {/* <EachInfoForSelect label="Nationality" value={globalState.country}/>
        <EachInfoForSelectState label="State of origin" value={globalState.state}/> */}
        <EachInfo label="Gender" value={globalState.gender} enabled={enabled}/>
        <EachInfo label="Title" value={globalState.myTitle} enabled={enabled}/>
        {/* <button onClick={check}>running</button> */}
      </div>
          {/* <Personal enabled={enabled} edit={edit} sendPayloadToBackend={sendPayloadToBackend}/> */}
          <Group position="center" mt="">
            <Button onClick={nextStep} className="">
              Next step
            </Button>
          </Group>
        </Stepper.Step>
        <Stepper.Step
          label=""
          icon={<FaAddressCard size="1.1rem" />}
          description="Contact"
        >
          {/* <Contact /> */}
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>Next step</Button>
          </Group>
        </Stepper.Step>
        <Stepper.Step label="" description="Referee">
          <Referee />
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
          </Group>
        </Stepper.Step>
        {/* <Stepper.Completed>Completed</Stepper.Completed> */}
      </Stepper>
      <div className="edit-info-container">
        <div className="edit-info-toggle" onClick={editMyDetails}>
          <input type="checkbox" className="edit-info-input" />
          <span className="edit-info-button"></span>
          <span className="edit-info-label">
            {edit ? (
              <BiSolidEdit size={32} color="blue" />
            ) : (
              <FaSave size={32} color="blue" />
            )}
          </span>
        </div>
      </div>
    </>
  );
}

export default StudentEditDetails;
