import DeckGL from "@deck.gl/react";
import { Map } from "react-map-gl";
import { IconLayer } from "@deck.gl/layers";

const MAPBOX_ACCESS_TOKEN = "";
const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 128, height: 128, mask: true },
};

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

// Data to be used by the LineLayer
const data = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781],
  },
];

export default function Home() {
  const iconLayer = new IconLayer({
    id: "icon-layer",
    data,
    pickable: true,
    // iconAtlas and iconMapping are required
    // getIcon: return a string
    iconAtlas:
      "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png",
    iconMapping: ICON_MAPPING,
    getIcon: (d) => "marker",

    sizeScale: 15,
    getPosition: (d) => d.coordinates,
    getSize: (d) => 5,
    getColor: (d) => [Math.sqrt(d.exits), 140, 0],
  });

  const layers = [iconLayer];

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "red" }}>
      <DeckGL
        width="100%"
        height="100%"
        initialViewState={INITIAL_VIEW_STATE}
        layers={layers}
      >
        <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN}></Map>
      </DeckGL>
    </div>
  );
}
