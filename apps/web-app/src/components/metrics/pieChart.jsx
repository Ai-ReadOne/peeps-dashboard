import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { grey} from "@mui/material/colors";
import 'chart.js/auto';
import { Pie } from "react-chartjs-2";

const PieChart = ({
  chartLabels, 
  chartData, 
  chartTitle="Project Completion Forecast", 
  chartDescription="Projected timeline for ongoing projects."}) => {

  const data = {
    labels: chartLabels || ["Projec 1", "Project 2", "Project 3", "Project 4", "Project 5", "Project 6"],
    datasets: [
      {
        label: "# of Months",
        data: chartData || [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          grey[200],
          grey[300],
          grey[400],
          grey[500],
          grey[600],
          grey[700],
        ],
        hoverBackgroundColor: [
          grey[200],
          grey[300],
          grey[400],
          grey[500],
          grey[600],
          grey[700],
        ], 
        borderWidth: 1,
        hoverBorderWidth: 1,
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Card variant="outline" style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)'}}>
      <CardHeader title={chartTitle} />
      <Typography variant="body2" color="text.secondary" ml={4} mt={-4} >
        {chartDescription}
      </Typography>
      <CardContent>
        <Pie data={data} options={options} />
      </CardContent>
    </Card>
  );
};

export default PieChart;
