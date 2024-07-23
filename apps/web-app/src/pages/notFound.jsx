import { MessageHeader } from "../components";
import {Card, CardHeader} from "@mui/material"

function Home() {
  return (
    <>
      <MessageHeader>
        Welcome John!
      </MessageHeader>
      <Card sx={{width: "600", height: "600" }} variant="outline">
        <CardHeader title="Page not found" />
      </Card>


    </>
  );
}

export default Home;
