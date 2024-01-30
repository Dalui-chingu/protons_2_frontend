import { useEffect } from "react";
import "./home.css";
import { useUserStore } from "../../stores/userStore";
import { useAppStore } from "../../stores/appStore";
import Loading from "./Loading";
import Map from "./Map";
import Search from "./Search";
import Result from "./Result";
import { useStationStore } from "../../stores/stationStore";

function Home() {
  const { stations, setStations } = useStationStore();
  const { currPosition, setCurrentPostion } = useUserStore();
  // const {userData, setUserData} = useUserStore();
  const { view } = useAppStore();
  useEffect(() => {
    //Fetch charging stations
    const url = `${import.meta.env.VITE_PORT_URL}/station`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setStations(data))
    .catch(error=>console.error(error))
  }, []);

  useEffect(() => {
    setCurrentPostion([11.081715, 77.134847]);
    // if (navigator.geolocation) {
    //   navigator.permissions.query({ name: "geolocation" }).then(function () {
    //     navigator.geolocation.getCurrentPosition((pos) => {
    //       var crd = pos.coords;
    //       console.log("Your current position is:");
    //       console.log(`Latitude : ${crd.latitude}`);
    //       console.log(`Longitude: ${crd.longitude}`);
    //     });
    //   });
    // } else {
    //   console.log("Geolocation is not supported by this browser.");
    // }
  }, []);

  if (!currPosition) {
    return <Loading />;
  }
  return (
    <>
      <div className="home_container">
        <Search />
      </div>
      {view === 1 ? <Result /> : null}
      <Map />
    </>
  );
}

export default Home;
