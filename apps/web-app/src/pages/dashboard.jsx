import { Grid } from "@mui/material";
import { MessageHeader } from "../components";
import { 
  ProjectsMetricCard, 
  SingleValueMetricCard,
  TeamProductivityMetricCard 
} from "../components/metrics";
import LineChart from "../components/metrics/line-chart"
import PieChart from "../components/metrics/pie-chart"


function Dashboard() {
  return (
    <>
      <MessageHeader>
        Welcome John!
      </MessageHeader>

      <Grid container  spacing={2} mb={10}>
        <Grid item xs={12} md={6} lg={3}>
          <SingleValueMetricCard 
            title="Company OKR Progress" 
            metricValue="85%" 
            description="+5% from last quater" 
            isUpTrend={true} 
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <SingleValueMetricCard 
            title="Key Metrics" 
            metricValue="12.5K" 
            description="Monthly active users" 
            isUpTrend={true} 
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <SingleValueMetricCard 
            title="Team OKR Progress" 
            metricValue="79%" 
            description="Average team OKR progress" 
            isUpTrend={true} 
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <SingleValueMetricCard 
            title="Upcoming Milestone" 
            metricValue="3" 
            description="Milestone in the next 20 days" 
            isUpTrend={true} 
          />
        </Grid>
      </Grid>
      
      <Grid container  spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          Flex On
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          Flex on
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TeamProductivityMetricCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <ProjectsMetricCard />
        </Grid>  
      </Grid>
    </>
  );
}

export default Dashboard;
