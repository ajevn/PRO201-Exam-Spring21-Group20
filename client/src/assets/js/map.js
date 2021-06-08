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
  setSelectedCampName,
  childMapClick
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

  const map = L.map("mapid", {
    center: [centerX, centerY],
    zoom: zoomLevel,
    zoomControl: showZoomControl,
    maxZoom: 10
  });

  map.zoomControl.setPosition("topright");
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

  const markers = L.markerClusterGroup();

  for (const item of campData) {
    const campLabelIcon = L.divIcon({
      className: "camp-label",
      html: `<div>
        <img src="
        ${layersPath}
        " />
        <p>
        ${item.id}
        </p>
        <div>
        ${item.location}
        </div>
        </div>`
    });

    const m = new L.marker(item.geoloc, { icon: campLabelIcon });

    // Create click listener for Camp Overview map
    if (updateData) {
      m.addEventListener("click", function() {
        for (let j = 0; j < products.length; j++) {
          products[j].totalRepairs = item.campRepairs[j];
        }

        updateData();
        setSelectedCampName(item.id);
        replaceMapWithResults();
        map.setView([23, 20], 2);
      });
    }

    // Create click listener for Dashboard map
    else {
      m.addEventListener("click", function() {
        childMapClick(item.id);
      });
    }

    markers.addLayer(m);
  }

  map.addLayer(markers);
}
