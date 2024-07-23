import { Card, List, ListItem, Typography } from "@mui/material";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const PieChart = ({chartLabel, chartData}) => {
  const data = {
    labels: chartLabel || ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "# of Votes",
        data: chartData || [12, 19, 3, 5, 2, 3],
        backgroundColor: "text.secondary",
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    elements: {},
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <Card sx={{ px: 8, py: 6, height: "350px" }}>
      <Typography fontSize={20} fontWeight={600} letterSpacing={0.1}>
        Title
      </Typography>

      <FlexBox>
        <Pie data={data} options={options} />

        <List sx={{ "& .MuiListItem-root": { py: 1 }, fontWeight: 600 }}>
          <ListItem>$50,0000</ListItem>
          <ListItem>$50,0000</ListItem>
          <ListItem>$50,0000</ListItem>
          <ListItem>$50,0000</ListItem>
          <ListItem>$50,0000</ListItem>
        </List>
      </FlexBox>
    </Card>
  );
};

export default PieChart;
