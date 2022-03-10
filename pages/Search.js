import Link from "next/link";
import { useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";

const Search = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <Wrapper>
      {/* Button Container */}
      <ButtonContainer>
        <Link href="/">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>

      {/* Input Container */}

      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>

        <InputBoxes>
          <Input
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <Input
            placeholder="Where to?"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </InputBoxes>
        <PlusIcons src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      {/* Saved palces button */}

      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>

      {/* Confirm location*/}
      <Link
        href={{
          pathname: "/Confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff,
          },
        }} 
      passHref>
        <ConfirmLocationsButton>Confirm Locations</ConfirmLocationsButton>
      </Link>
    </Wrapper>
  );
};

export default Search;

// Styles

const Wrapper = tw.div`
  bg-gray-200
  h-screen

`;

const ButtonContainer = tw.div`
   p-1
   bg-white
   px-4
   

`;

const BackButton = tw.img`
   cursor-pointer
   h-9
   border border-gray-300
   rounded-full
   transform hover:scale-105 transition
   
 
`;

const InputContainer = tw.div`

  bg-white
  flex
  items-center
  px-4
  mb-2
  

  
`;

const FromToIcons = tw.div`
  w-10
  flex
  flex-col 
  mr-2
  items-center
  
  
`;

const Circle = tw.img`
  h-2.5
  m-1
  animate-ping
  
  
`;

const Line = tw.img`
  h-10  
  m-1
  
  
`;

const Square = tw.img`
  h-3
  m-1
  animate-bounce
  
`;

const InputBoxes = tw.div`
    flex flex-col flex-1
    
    
     

`;

const Input = tw.input`
  h-10
  bg-gray-200
  my-2
  rounded-lg
  p-2
  outline-none
  border-none
  transform hover:scale-105 transition
  

`;

const PlusIcons = tw.img`

  w-10
  h-10
  bg-gray-200
  rounded-full
  ml-3
  transform hover:scale-110 transition
  
  
`;

const SavedPlaces = tw.div`

  flex
  items-center
  bg-white
  px-4
  py-2
  


  
`;

const StarIcon = tw.img`

  bg-gray-400
  w-10
  h-10
  p-2
  rounded-full
  mr-2
  transform hover:scale-110 transition
`;

const ConfirmLocationsButton = tw.div`

  bg-black
  text-white
  text-center
  mt-3
  mx-4
  py-2
  rounded-md
  text-2xl
  cursor-pointer
  transform hover:scale-95 transition

`;
