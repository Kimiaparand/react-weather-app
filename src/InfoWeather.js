import React from "react";
import ShowDate from "./ShowDate";
import WeatherIcon from "./WeatherIcon";

export default function InfoWeather(props) {
  return (
    <div className="InfoWeather">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <ShowDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">·C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
