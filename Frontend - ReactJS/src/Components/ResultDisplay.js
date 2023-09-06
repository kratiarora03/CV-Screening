import React from "react";
import { Chart } from "react-google-charts";

const ResultDisplay = ({ data }) => {
  const data_skills = [
    ["Matching", "Percentage"],
    ["Matched", data.matchpercent],
    ["Non-Matched", 100 - data.matchpercent],
  ];

  const data_language = [
    ["Skills", "Percentage"],
    // [key, value] will be dynamically populated from API data
  ];

  Object.entries(data.map).forEach(([key, value]) => {
    const dataEntry = [key, parseFloat(value)];
    data_language.push(dataEntry);
  });

  const options = {
    title: "Skills Matched",
  };

  const options2 = {
    title: "Score for Skills",
  };

  const renderMapItems = () => {
    return Object.entries(data.map).map(([key, value]) => (
      <div key={key} className="map-item">
        <span className="map-item-key">Score for : {key} </span>
        <span className="map-item-value">{value} % Maching</span>
      </div>
    ));
  };

  return (
    <div>
      <div>
        <h2 align="center">Analysis of CV Screening : </h2>
        <br />
        <p>
          <b>Filename:</b> {data.filename}
        </p>
        <p>
          <b>Email:</b> {data.email}
        </p>
        <p>
          <b>PhoneNo. :</b> {data.phone}
        </p>
        <p>
          <b>Overall skills matched in CV is :</b> {data.matchpercent} %
        </p>
        <p>
          <b>Map:</b>
          {renderMapItems()}
        </p>
      </div>
      <br />
      <br />
      <div className="container-chart">
        <Chart
          chartType="PieChart"
          data={data_skills}
          options={options}
          width={"70%"}
          height={"150px"}
        />
      </div>
      <div className="container-chart">
        <Chart
          chartType="PieChart"
          data={data_language}
          options={options2}
          width={"70%"}
          height={"150px"}
        />
      </div>
    </div>
  );
};

export default ResultDisplay;
