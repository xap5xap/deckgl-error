import DeckGL from "@deck.gl/react";
import { IconLayer } from "@deck.gl/layers";
import StaticMap from "react-map-gl";

const MAPBOX_ACCESS_TOKEN = "";

const INITIAL_VIEW_STATE = {
  longitude: -122.42177834,
  latitude: 37.78346622,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

export default function Home() {
  const iconLayer = new IconLayer({
    id: "IconLayer",
    data: "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json",

    getColor: (d) => [Math.sqrt(d.exits), 140, 0],
    getIcon: (d) => "marker",
    getPosition: (d) => d.coordinates,
    getSize: (d) => 5,
    iconAtlas:
      "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png",
    iconMapping: {
      marker: {
        x: 0,
        y: 0,
        width: 128,
        height: 128,
        anchorY: 128,
        mask: true,
      },
    },

    sizeScale: 8,
    pickable: true,
  });

  const layers = [iconLayer];

  return (
    <DeckGL
      width="100%"
      height="100%"
      controller={true}
      initialViewState={INITIAL_VIEW_STATE}
      layers={layers}
    >
      <StaticMap
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v9"
      ></StaticMap>
    </DeckGL>
  );
}
