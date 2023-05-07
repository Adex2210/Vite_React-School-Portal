import React from "react";
import EventsCard from "./EventsCard";
import EventCard_Img from "./EventCard_Img";

const OurNewsCardColumn3 = () => {
  return (
    <>
      <div
        className="our-news-card-column-3 d-flex flex-column gap-3"
        style={{ width: "33.3%" }}
      >
        <EventCard_Img
          cardstyle={{ width: "100%" }}
          classes="our-news"
          classesStyle={{ backgroundColor: "#C389CE" }}
          img="pic/bg-image-4.jpg"
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px", backgroundColor: "#C389CE" }}
          time_container="time-container-none"
          country_container="country-container-none"
          days_time="none"
          days_time_icon="fas fa-user my-auto"
          title="our school anniversary"
        ></EventCard_Img>
        <EventsCard
          cardstyle={{ width: "100%" }}
          classes="our-news"
          classesStyle={{ backgroundColor: "#E16C6C" }}
          img="pic/bg-image-3.jpg"
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px", backgroundColor: "#E16C6C" }}
          time_container="time-container-none"
          country_container="country-container-none"
          days_time="none"
          days_time_icon="fas fa-user my-auto"
          title="our school anniversary"
          hr_class="mb-3 bg-white"
          hr_style={{
            height: "3px",
            width: "35px",
          }}
          styles={{ backgroundColor: "#E16C6C" }}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias veniam tempora."
          btn="read more"
          btnstyle={{ backgroundColor: "#CA6969", textTransform: "capitalize" }}
        ></EventsCard>
        <EventsCard
          cardstyle={{ width: "100%" }}
          classes="our-news"
          classesStyle={{ backgroundColor: "#74CEE4" }}
          img="pic/bg-image-4.jpg"
          h5Classes="card-title py-3 text-uppercase px-3"
          h5Style={{ marginBottom: "0px", backgroundColor: "#74CEE4" }}
          time_container="time-container-none"
          country_container="country-container-none"
          days_time="none"
          days_time_icon="fas fa-user my-auto"
          title="our school anniversary"
          hr_class="mb-3 bg-white"
          hr_style={{
            height: "3px",
            width: "35px",
          }}
          styles={{ backgroundColor: "#74CEE4" }}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias veniam tempora."
          btn="read more"
          btnstyle={{ backgroundColor: "#6FC4D9", textTransform: "capitalize" }}
        ></EventsCard>
      </div>
    </>
  );
};

export default OurNewsCardColumn3;
