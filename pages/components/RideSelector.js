import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../../data/carList";

const RideSelector = ({ pickupCoordinates, dropOffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}?access_token=pk.eyJ1IjoiYmF6aWxuaXphbSIsImEiOiJjbDAwaGRkcngwazJrM2N0MTBpeDhuZ2NnIn0.a1TSYfpQb-egF95H2jAymw`
    )
      .then(res => res.json())
      .then(data => {
        setRideDuration(data.routes[0].duration / 100)
      })
  }, [pickupCoordinates, dropOffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <ServiceDetails>{car.service}</ServiceDetails>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>{"$" + (rideDuration * car.multiplier ).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

//Styles

const Wrapper = tw.div`

 flex-1 
 overflow-y-scroll
 flex flex-col
 

`;

const Title = tw.div`

    text-gray-500
    text-center
    text-xs
    py-2
    border-b

`;

const CarList = tw.div`
  overflow-y-scroll

`;

const Car = tw.div`
  flex
  p-4
  items-center


`;

const CarImage = tw.img`

    h-14 
    mr-4

`;

const CarDetails = tw.div`
    flex-1

`;

const ServiceDetails = tw.div`
    font-medium

`;

const Time = tw.div`
    text-xs
    text-blue-500

`;

const Price = tw.div`
    text-sm

`;
