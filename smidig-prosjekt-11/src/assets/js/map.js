import "leaflet/dist/leaflet.js";
import "leaflet.markercluster/dist/leaflet.markercluster.js";

export function createMap(
  centerX,
  centerY,
  zoomLevel,
  showZoomControl,
  campData,
  products,
  updateData,
  replaceMapWithResults,
  setCampIndex
) {
  const L = window.L; // suppress 'L' is not defined error

  // Fix to wrongly referenced image locations in Leaflet bundle
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
  });

  const layersPath = require("../images/layers.png");
  const geojsonPath = require("../data/custom.geo.json");

  var map = L.map("mapid", {
    center: [centerX, centerY],
    zoom: zoomLevel,
    zoomControl: showZoomControl,
    maxZoom: 10
  });
  
  map.zoomControl.setPosition('topright');

  // GeoJson styling
  const geojsonStyle = {
    color: "#123123",
    weight: 1,
    opacity: 1,
    fillColor: "#b5bbb8",
    fillOpacity: 1
  };

  L.geoJSON(geojsonPath, {
    style: geojsonStyle
  }).addTo(map);

  var markers = L.markerClusterGroup();

  for (let i = 0; i < campData.length; i++) {
    var campLabelIcon = L.divIcon({
      className: "camp-label",
      html:
        `<div>
        <img src="
        ${layersPath}
        " />
        <p>
        ${campData[i].id}
        </p>
        <div>
        ${campData[i].location}
        </div>
        </div>`
    });

    var m = new L.marker(campData[i].geoloc, { icon: campLabelIcon });

    m.addEventListener("click", function(){
      console.log("clicked on camp " + campData[i].id);
      for (let j = 0; j < products.length; j++) {
        products[j].totalRepairs = j;
      }
      updateData();
      setCampIndex(i);
      replaceMapWithResults();
      map.setView([23, 20], 2);      
    });

    markers.addLayer(m);
  }

  map.addLayer(markers);
}