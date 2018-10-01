import React from "react";
import Travel from "./Travel";

const travels = [
    { 
        photo:"https://airalgerie.dz/wp-content/uploads/2016/10/jijel2_780x360.jpg" , 
        name: "Algérie",
        country: "Jijel ",
        distance :"  2 372,3 km",
     },
    { 
        photo:"https://culturebox.francetvinfo.fr/sites/default/files/assets/images/2016/09/vlcsnap-2016-09-22-11h50m27s903.png", 
        name: "Chine",
        country: "Pékin",
        distance :"  8 461 km",
     },
    { 
        photo:"https://img.ev.mu/images/villes/34954/1605x642/34954.jpg", 
        name: "Guinée Bissau",
        country: "Bolama",
        distance :"  4 130 km",
    },
    { 
        photo:"https://www.luxe-infinity.com/wp-content/uploads/2017/04/micronesie-3j-luxe-infinity.jpg", 
        name: "Micronésie",
        country: "Palikir",
        distance :"  13 786 km",
     }
  ];

const Travels = () => (
    <div>
      {travels.map(travel=>(
        <Travel key ={travel.destination}
          photo = {travel.photo}
          destination = {travel.name}          
          country = {travel.country}
          distance = {travel.distance}
        />
      ))}
    </div>
  );
  
export default Travels;
