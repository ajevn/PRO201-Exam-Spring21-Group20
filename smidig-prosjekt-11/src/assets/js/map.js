import "leaflet/dist/leaflet.js";
import "leaflet.markercluster/dist/leaflet.markercluster.js";

export function createMap(
  centerX,
  centerY,
  zoomLevel,
  showZoomControl,
  campData,
  products
) {
  const L = window.L; // suppress 'L' is not defined error

  console.log(products);

  // FORTSETT HER!
  products[0].totalRepairs = 111;

  // Fix to wrongly referenced image locations in Leaflet bundle
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
  });

  const layersPath = require("../Images/layers.png");
  const geojsonPath = require("../data/custom.geo.json");

  var map = L.map("mapid", {
    center: [centerX, centerY],
    zoom: zoomLevel,
    zoomControl: showZoomControl,
    maxZoom: 10
  });

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
        "<div>" +
        '<img src="' +
        layersPath +
        '" />' +
        "<p>" +
        campData[i].id +
        "</p>" +
        "<div>" +
        campData[i].location +
        "</div>" +
        "</div>"
    });

    var m = new L.marker(campData[i].geoloc, { icon: campLabelIcon });

    markers.addLayer(m);
  }

  /*var campLabelIcon1 = L.divIcon({
    className: "camp-label",
    html:
      '<img src="' + layersPath + '" />' + "<p>Camp 1</p>" + "<div>723</div>"
  });
  var campLabelIcon2 = L.divIcon({
    className: "camp-label",
    html:
      '<img src="' + layersPath + '" />' + "<p>Camp 2</p>" + "<div>1,374</div>"
  });
  var campLabelIcon3 = L.divIcon({
    className: "camp-label",
    html: '<img src="' + layersPath + '" />' + "<p>Camp 3</p>" + "<div>15</div>"
  });

  var m1 = new L.marker([20, 20], { icon: campLabelIcon1 });
  var m2 = new L.marker([15, 20], { icon: campLabelIcon2 });
  var m3 = new L.marker([25, 15], { icon: campLabelIcon3 });

  markers.addLayer(m1);
  markers.addLayer(m2);
  markers.addLayer(m3);*/
  map.addLayer(markers);
}
