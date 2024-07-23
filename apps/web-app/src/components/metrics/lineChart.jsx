import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const LineChart = ({
  chartLabels, 
  chartData }) => {
  const data ={
    labels: chartLabels || ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Actual',
        data: chartData ||[1000000, 90000, 1200000, 1100000, 1000000, 1500000],
        borderColor: `${(props) => props.theme.palette.primary}}`,
        backgroundColor: `${(props) => props.theme.palette.primary}}`,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  

  return (
    <Line data={data} options={options} />
  );
};

export default LineChart;
