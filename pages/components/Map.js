
import tw from "tailwind-styled-components"
import { useEffect } from 'react'
import mapboxgl from '!mapbox-gl'


mapboxgl.accessToken =
    'pk.eyJ1IjoiYmF6aWxuaXphbSIsImEiOiJjbDAwaGRkcngwazJrM2N0MTBpeDhuZ2NnIn0.a1TSYfpQb-egF95H2jAymw'

const Map = () => {
    useEffect(() => {
        // initialize map only once
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/mapbox/light-v10',
            center: [76.1301898956299, 10.803461933912313],
            zoom: 10,
        });
    });

    return <Wrapper id="map"> </Wrapper>

}

const Wrapper = tw.div`
  flex-1
`




export default Map

