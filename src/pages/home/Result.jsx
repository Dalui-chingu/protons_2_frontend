// Result.jsx
import { useState } from "react";
import "./result.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { useUserStore } from "../../stores/userStore";
import { useAppStore } from "../../stores/appStore";
import {useStationStore} from '../../stores/stationStore'
import { Link, useNavigate } from 'react-router-dom';
function Result() {
 const {currPosition}=useUserStore();
  const { setView, setLocation } = useAppStore();
  const {resultLocation, setresultLocation}=useStationStore();
  const [res,setRes] = useState(resultLocation)


  console.log("Results",resultLocation.length);
  const navigate = useNavigate();

  const handleGetDirection = (stationLocation) => {
    setLocation([currPosition,stationLocation]);
    setView(2);
  };

  const handleShowInfo = (id) => {
    // Implement your logic to show more info
navigate(`/station/${id}`);
    console.log(`Show more info for station ${id}`);
  };

  if(!res) return <></>;
  return (
    <div className="Whole_Container">
      <div className="result-containerr">
        {res.map((station,index) => (
          <div key={station._id} className="result-card">
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <h4>{station.name}</h4>
            {index%2!=0?<FontAwesomeIcon icon={faLeaf} style={{color:'green',fontSize:'20px'}}/>:<></>}
            </div>
            <p>Description: {station.description}</p>
            <p>Location: Lat - {station.lat}, Lng - {station.lng}</p>
            <div>
              <button className="button-container1" style={{ paddingLeft: '20px', marginRight: '10px' }} onClick={() => handleGetDirection([station.lat, station.lng])}>Direction</button>
              <button className="button-container2" style={{ marginLeft: '2px' }} onClick={() => handleShowInfo(station._id)}>More Info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Result;
