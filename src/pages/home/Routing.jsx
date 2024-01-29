import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { useAppStore } from "../../stores/appStore";
import "./Routing.css";
import CircleMarker from "/circle-pin.png";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

export default function Routing() {
  const map = useMap();
  const { location } = useAppStore();

  const getDirectionInfo = () => {
    const data = "Directions Result";

    return renderToStaticMarkup(<h2>{data}</h2>);
  };

  useEffect(() => {
    if (!map || location.error) return;
    const routingControl = L.Routing.control({
      waypoints: location.map((loc) => L.latLng(loc[0], loc[1])),
      routeWhileDragging: true,
      position: "bottomleft",
      // createMarker: function (i, wp, nWps) {
      //   // You can return a different marker based on the index (i) or the waypoint (wp)
      //   // For example, let's return a different color marker for each waypoint
      //   const markerColor = i % 2 === 0 ? "blue" : "red";
      //   return L.marker(wp.latLng, {
      //     icon: L.icon({
      //       iconUrl: /circle-pin.png,
      //     }),
      //   });
      // },
    }).addTo(map);

    const CustomControl = L.Control.extend({
      options: {
        position: "bottomleft",
      },
      onAdd: function () {
        var div = L.DomUtil.create("div", "custom-control");
        // div.innerHTML = getDirectionInfo();
        return div;
      },
    });

    // Add the custom control to the map
    const customControl = new CustomControl().addTo(map);

    return () => {
      map.removeControl(routingControl);
      map.removeControl(customControl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, location]);

  return null;
}