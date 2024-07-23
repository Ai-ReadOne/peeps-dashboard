import { 
  Card, 
  CardHeader, 
  CardContent, 
  Grid, 
  LinearProgress,
  Typography
} from "@mui/material";
import { CardHeaderWithValue, MessageHeader } from "../components";
import { 
  MetricContainer,
  ProjectsMetricCard, 
  SingleValueMetricCard,
  TeamProductivityMetricCard 
} from "../components/metrics";
import LineChart from "../components/metrics/lineChart"
import PieChart from "../components/metrics/pieChart"


function Dashboard() {
  let statsPeriod = "Q1 2024";
  let statsValue = 75;
  let target = "$1.2M";
  let actual = "$900K";
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
          <Card variant='outlined' style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)'}}>
            <CardHeader title="OKR Progress" />

            <CardContent>
            <MetricContainer>
              <CardHeaderWithValue headerTitle={statsPeriod} headerValue={statsValue} />
              <LinearProgress variant="determinate" value={statsValue} />
            </MetricContainer>

            <MetricContainer>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography variant="body2" color="text.secondary">
                    Target: {target}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="text.secondary">
                    Actual: {actual}
                </Typography>
              </Grid>
            </Grid>
            </MetricContainer>

            <LineChart />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <PieChart />
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
