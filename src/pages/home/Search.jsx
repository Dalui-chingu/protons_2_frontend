import "./search.css";
import { useState } from "react";
import { useAppStore } from "../../stores/appStore";
import { useUserStore } from "../../stores/userStore";
import {useStationStore} from '../../stores/stationStore'
import AsyncSelect from "react-select/async";
import debounce from "lodash.debounce";
import Select from "react-select";
import Result from "./Result"; // Import the Result component
import Alert from "@mui/material/Alert";
import FmdBadIcon from '@mui/icons-material/FmdBad';


function Search() {
  const {userDetail} = useUserStore();
  const [collapse,setCollapse] = useState(false);
  const { setView, setLocation } = useAppStore();
  const {resultLocation, setresultLocation}=useStationStore();
  const { currPosition } = useUserStore();
  const [milage, setMilage] = useState(0);
  const [batteryLevel, setBatteryLevel] = useState(50);
  const [source, setSource] = useState(currPosition);
  const [destination, setDestination] = useState();
  const [nearestStations, setNearestStations] = useState(null); // State to store the nearest charging stations
  const [error, setError] = useState(false);

  const handleNearestSearch = async () => {
    try {
      if (Array.isArray(source) && source.length >= 2) {
        const [lat, lng] = source;
  
        const response = await fetch(`${import.meta.env.VITE_PORT_URL}/findnearest`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lat: lat,
            lng: lng,
          }),
        });
  
        if (!response.ok) {
          console.error("Error fetching nearest charging stations");
          return;
        }
  
        const responseData = await response.json();
        const nearestStations = responseData.nearestStations;
        
        console.log("nearest",nearestStations);

      setresultLocation(nearestStations);

      setView(1); // Assuming you want to show the Result component after receiving the data
    } else {
      console.error("Invalid source format");
    }
  } catch (error) {
    console.error("Error during nearest search:", error);
  }
};
  
  const getVehicle = ()=>{
    return userDetail.vehicles.map((v)=>{
      return {
        value:v.mileage,
      label:v.modelname
      }
    })
  }

  const handleGetDirection = async () => {
    console.log([source,destination]);
    const response = await fetch(`${import.meta.env.VITE_PORT_URL}/getPath`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            travelRoute: [source, destination],
            mileage:milage,
            batteryLevel
          }),
        });
        console.log(milage,batteryLevel);
        if (!response.ok) {
          console.error("Error fetching nearest charging stations");
          return;
        }

  
const route = await response.json()
if(route.error)
    {
      setError(true);
      setView(0);
      return;
    }
    setLocation(route);
    
    setView(2);
  };

  const promiseOptions = debounce((inputValue, callback) => {
    new Promise((resolve) => {
      setTimeout(async () => {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${inputValue}`
        );
        const data = await res.json();
        const options = data.map((i) => {
          return {
            label: i.display_name,
            value: [+i.lat, +i.lon],
          };
        });
        resolve(options);
      }, 500); // delay of 500ms
    }).then((options) => {
      callback(options);
    });
  }, 500); // delay of 500ms

  const searchStyle = ()=>{
    if(collapse) {
      return {
        height: '50px',
        overflow: 'hidden',
        transition: 'height 0.3s ease-in-out'
      }
    }
  }
  
  return (
    <>
    <div className="search-container" style={searchStyle()}>
        <h2>Protons <p style={{display:"contents"}}><button style={{background:"none",border:"none"}} onClick={()=>{setCollapse(false)}}>🔻</button></p>
        </h2>
        <br/>
      <div>
        <AsyncSelect
          placeholder="Current Location"
          cacheOptions
          loadOptions={promiseOptions}
          onChange={(res) => setSource(res.value)}
        />
        <br />
        <AsyncSelect
          placeholder="Enter Destination"
          cacheOptions
          loadOptions={promiseOptions}
          onChange={(res) => setDestination(res.value)}
        />
        <br />
        <Select
          options={getVehicle()}
          placeholder="Choose Vehicle"
          onChange={(res) => setMilage(res.value)}
        />
        <br />
        Battery Level :{" "}
        <input
          type="range"
          min="0"
          max="100"
          onChange={(e) => setBatteryLevel(e.target.value)}
        />{batteryLevel}%

        <br />
        <div className="div_btn">
        <button className="search_btn1" onClick={handleGetDirection}>Get Direction</button>
        <br />
        <button className="search_btn2" onClick={handleNearestSearch}>
          Nearest Stations
        </button>
        </div>
      </div>
      <br/>
      {error && (
          <Alert
            icon={<FmdBadIcon fontSize="inherit" />}
            severity="error"
            onClose={() => {
              setError(false);
            }}
          >
            <h2>Sorry you can't travel this distance with this battery level</h2>
            <br/>
            <h2>Contact for the mobile service call</h2>

            <h2>012-3456789</h2>
          </Alert>
        )}
        <p><button style={{background:"none",border:"none"}} onClick={()=>{setCollapse(true)}}>🔺</button></p>
    </div>
     <Result />

    </>
  );
}

export default Search;
