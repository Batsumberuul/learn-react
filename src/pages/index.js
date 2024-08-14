import Box from "../component/box";
import Round from "../component/round";
import Backround from "../component/backround";
import Card from "@/component/profileComponent/card";

function MyComponent() {
  return <div>Hello</div>;
}
function Home() {
  return (
    <div>
      {/* <Button text="1" />
      <Button text="2" />
      <Button text="3" />
      <Button text="4" />
      <Box text="box" />
      <Round text="Round" />
      <Box text="box" />
      <Round text="Round" />
      <Round text="Round" />
      <Box text="box" /> */}
      <Card />
      <Backround />
    </div>
  );
}

export default Home;
