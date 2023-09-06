import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import "./DropdownMenu.css";
import options from "./Options";
import ResultDisplay from "./ResultDisplay";

export default function FileUpload() {
  const [data, setData] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const removeSelectedFile = () => {
    setSelectedFile(null);
  };

  const handleOptionChange = (selected) => {
    setSelectedOptions(selected);
  };

  const handleRemoveOption = (removedOption) => {
    setSelectedOptions(
      selectedOptions.filter((option) => option.value !== removedOption.value)
    );
  };

  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const selectedOptionValues = selectedOptions.map((option) => option.value);

  const onClickHandler = async () => {
    const data = new FormData();

    data.append("pdf", selectedFile);
    data.append("options", selectedOptionValues.join(","));

    try {
      const response = await axios.post(
        "http://localhost:9090/api/upload-file",
        data
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card">
        <div className="dropdown-menu">
          <h2>Select your options:</h2>
          <Select
            options={options}
            isMulti
            value={selectedOptions}
            onChange={handleOptionChange}
            placeholder="Search options..."
          />
          <br />
          <h3>Selected options:</h3>
          {selectedOptions.length > 0 ? (
            <ul>
              {selectedOptions.map((option) => (
                <li key={option.value}>
                  {option.label}
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveOption(option)}
                  >
                    &#x2716;
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No options selected</p>
          )}
          <br />
        </div>
      </div>
      <div className="card">
        <div className="select_cv">
          <h3>Please Select CV for analysis as per above criteria</h3>
          <label htmlFor="cvFile" className="custom-file-upload">
            <input
              type="file"
              id="cvFile"
              name="file"
              onChange={onChangeHandler}
              multiple
            />
            Select CV
          </label>
          {selectedFile && (
            <div>
              <p>Selected File: {selectedFile.name}</p>
              <button
                onClick={removeSelectedFile}
                style={{
                  backgroundColor: "red",
                  width: "110px",
                  height: "60px",
                }}
              >
                Remove File
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="card">
        <div className="select_cv">
          <button
            type="button"
            className="btn btn-success btn-block"
            onClick={onClickHandler}
          >
            Submit for CV Screening..
          </button>
        </div>
      </div>
      <br />
      <br />
      {data && (
        <div className="card">
          <ResultDisplay data={data} matchpercent={data.matchpercent} />
        </div>
      )}
      {/* {data && (
        <div className="card">
          <h2>{JSON.stringify(data, null, 2)}</h2>
        </div>
      )} */}
    </>
  );
}
