import { MessageHeader } from "../components";
import {Card, CardHeader} from "@mui/material"

function Home() {
  return (
    <>
      <MessageHeader>
        Welcome John!
      </MessageHeader>
      <Card sx={{width: "600", height: "600" }} variant="outline" elevation={6}>
        <CardHeader title="Coming Soon!" />
      </Card>


    </>
  );
}

export default Home;
