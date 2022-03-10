import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmF6aWxuaXphbSIsImEiOiJjbDAwaGRkcngwazJrM2N0MTBpeDhuZ2NnIn0.a1TSYfpQb-egF95H2jAymw";

const Map = (props) => {
  console.log(props);
  useEffect(() => {
    // initialize map only once
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: [76.1301898956299, 10.803461933912313],
      zoom: 10,
    });

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }

    if (props.dropOffCoordinates) {
      addToMap(map, props.dropOffCoordinates);
    }


    //// for zooming effect
    if (props.pickupCoordinates && props.dropOffCoordinates) {
      map.fitBounds([props.pickupCoordinates, props.dropOffCoordinates],{
        padding: 70,
      });
    }
  }, [props.pickupCoordinates, props.dropOffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"> </Wrapper>;
};

export default Map;

const Wrapper = tw.div`
  flex-1 h-1/2
`;
