import React from "react";
import "./App.css";
import hotimg from "./assets/sun.jpg";
import coldimg from "./assets/cold.jpg";
import rainimg from "./assets/rain.jpg";
import Card from "@mui/material/Card";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import SunnyIcon from "@mui/icons-material/Sunny";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

function InfoBox({ info }) {
  let imgurl =
    "https://unsplash.com/photos/gray-concrete-road-in-the-middle-of-foggy-mountains-7T-RbsdCKj0";

  return (
    <>
      <div className="infobox">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80 ? rainimg : info.temp > 15 ? hotimg : coldimg
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {
              info.humidity > 80
                ? <WaterDropIcon/>
                : info.temp > 15
                ? <SunnyIcon/>
                : <AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <div>
                <b>Temperature:</b>
                {info.temp}&deg;C
                <br />
                Min-temp: {info.tempMin}&deg;C
                <br />
                Max-temp: {info.tempMax}&deg;C
              </div>
              <div>
                <b>Humidity:</b>
                {info.humidity}
              </div>
              <div>
                The weather can be decribed as <b>{info.weatherdes}</b> , it
                feels like <b>{info.feelsLike}&deg;C</b>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default InfoBox;
