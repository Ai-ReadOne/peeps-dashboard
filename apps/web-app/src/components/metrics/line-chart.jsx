import { Card, CardContent, CardHeader } from '@mui/material';
import { Line } from 'react-chartjs-2';

const LineChart = ({chartLabels, chartData }) => {
  const data ={
    labels: chartLabels || ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Target',
        data: chartData ||[1000000, 1100000, 1200000, 1300000, 1400000, 1500000],
        borderColor: 'blue',
        backgroundColor: 'rgba(blue, 0.2)',
        pointRadius: 5,
        pointHitRadius: 10,
        pointHoverBackgroundColor: 'blue',
        pointHoverBorderColor: 'rgba(blue, 1)',
      },
    ],
  };

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardHeader title="OKR Progress" />
      <CardContent>
        <Line data={chartData} options={{responsive: true}} />
      </CardContent>
    </Card>
  );
};

export default LineChart;
