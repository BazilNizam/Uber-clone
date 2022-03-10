import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      {/* Map section */}
      <Map />
      <ActionItems>
        {/*Header*/}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Bazil Nizam</Name>
            <UserImage src="https://scontent.fccj2-2.fna.fbcdn.net/v/t39.30808-6/249055022_4492203834227792_2286278363643587005_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=SXADxHyZ2BYAX9RIc3f&_nc_ht=scontent.fccj2-2.fna&oh=00_AT-twLSnq57eR8PzgqRRooLQPrL5buulwncJTtO-WDuG1g&oe=622A581A" />
          </Profile>
        </Header>

        {/* Action Buttons */}

        <ActionButtons>
          {/* car button */}
          <Link href="/Search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />{" "}
              Ride
            </ActionButton>
          </Link>

          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            2-Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>

        {/* Input Buttons */}
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

//STYLES

const Wrapper = tw.div`
  flex flex-col h-screen

`;

const ActionItems = tw.div`
  flex-1
  p-4

`;

const Header = tw.div`

flex justify-between items-center

`;

const UberLogo = tw.img`
   h-28


`;

const Profile = tw.div`
      
  flex items-center
`;
const Name = tw.div`

  mr-4 w-20 text-sm

`;
const UserImage = tw.img`

  h-12
  w-12
  rounded-full
  border border-gray-300
  p-px

`;

const ActionButtons = tw.div`

  flex

`;

const ActionButton = tw.div`
  flex
  bg-gray-200
  flex-1
  m-1
  h-32
  items-center
  flex-col
  justify-center
  rounded-lg
  transform hover:scale-105 transition
  text-xl
  
`;

const ActionButtonImage = tw.img`
  h-3/5
`;

const InputButton = tw.div`
  h-20
  bg-gray-200
  text-2xl
  p-5
  flex
  item-center 
  mt-4
  rounded-md


`;
