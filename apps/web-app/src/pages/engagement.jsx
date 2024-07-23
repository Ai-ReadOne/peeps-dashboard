import { MessageHeader } from "../components";
import {Card, CardHeader} from "@mui/material"

function Home() {
  return (
    <>
      <MessageHeader>
        Welcome John!
      </MessageHeader>
      <Card sx={{width: "600", height: "600" }} variant="outline" style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)'}}>
        <CardHeader title="Coming Soon!" />
      </Card>


    </>
  );
}

export default Home;
