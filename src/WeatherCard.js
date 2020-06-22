import React from "react";

const api = {
  key: "1c24c47c116eeebc0c7373bcc9ba723b",
  base: "https://samples.openweathermap.org/data/2.5/",
};
const WeatherCard = (props) => {
  return (
    <div className="weather-card">
      <main>
        <div className="search-box">
          <input 
          type="text" 
          className="search-bar" 
          placeholder="Search..." 
          />
        </div>
      </main>
    </div>
  );
};

export default WeatherCard;
