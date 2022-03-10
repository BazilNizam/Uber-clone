import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";
import Link from "next/link";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordiantes] = useState([0, 0]);
  const [dropOffCoordinates, setDropOffCoordiantes] = useState([0, 0]);

  const getPickupCordinates = (pickup) => {
    // const pickup = "Nilambur";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
      new URLSearchParams({
        access_token:
          "pk.eyJ1IjoiYmF6aWxuaXphbSIsImEiOiJjbDAwaGRkcngwazJrM2N0MTBpeDhuZ2NnIn0.a1TSYfpQb-egF95H2jAymw",
        limit: 1,
      })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordiantes(data.features[0].center);
      });
  };

  const getDropOffCordinates = (dropoff) => {
    // const dropoff = "Wandoor";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
      new URLSearchParams({
        access_token:
          "pk.eyJ1IjoiYmF6aWxuaXphbSIsImEiOiJjbDAwaGRkcngwazJrM2N0MTBpeDhuZ2NnIn0.a1TSYfpQb-egF95H2jAymw",
        limit: 1,
      })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropOffCoordiantes(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCordinates(pickup);
    getDropOffCordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/Search" passHref>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
          </Link>
      </ButtonContainer>

      <Map
        pickupCoordinates={pickupCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropOffCoordinates={dropOffCoordinates}
        />
        <ConfirmButonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

// Styles

const Wrapper = tw.div`
flex flex-col h-screen


`;

const RideContainer = tw.div`
    
  flex-1 flex flex-col
  h-1/2


`;

const ConfirmButonContainer = tw.div`

    border-t-2
    
`;

const ConfirmButton = tw.div`
    
    
    bg-black 
    text-white
    my-4
    mx-4
    text-center
    py-4
    rounded-md
    text-xl
    transform hover:scale-105 transition
`;

const ButtonContainer = tw.div`
  rounded-full
  absolute
  top-4 left-4
  z-10
  bg-white
  shadow-md
  cursor-pointer
  transform hover:scale-105 transition

`;

const BackButton = tw.img`
    h-full
    objet-contain
    text-xl
    transform hover:scale-105 transition
    
`;