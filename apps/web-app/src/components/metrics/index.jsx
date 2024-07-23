import {FlagOutlined, TrendingDown, TrendingUp} from "@mui/icons-material/";
import { Card, CardContent, CardHeader, Grid, LinearProgress, Typography } from "@mui/material";
import {styled} from "styled-components"
import { CardHeaderWithValue, CardValueWithBadge } from "..";

const FlagIcon = styled(FlagOutlined)`
margin-top: 15px;
fill: "grey"
`

const TrendUpIcon = styled(TrendingUp)`
  fill: "success";
`
const TrendDownIcon = styled(TrendingDown)`
  fill: "red";
  color: "red";
  background-color: "red";
`
export const MetricContainer = styled.div`
  display: grid;
  direction: columns;
  gap: 8px;
  margin-bottom: 20px;
`
const TrendContainer = styled.div`
  display: flex;
  gap: 8px;
-`
export const SingleValueMetricCard = ({ 
  title="Default Title", 
  metricValue="0", 
  isUpTrend=false, 
  description="Default metric description" }) => {

  let TrendIcon = () => {
    return <TrendDownIcon color="error" />
  }

  if(isUpTrend){
    TrendIcon = () => {
      return <TrendUpIcon color="success" />
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined" style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)'}}>
      <Grid container  spacing={2}>
        <Grid item xs={10}>
          <CardHeader title={title} />
        </Grid>
        <Grid item xs={2}>
          <FlagIcon />
        </Grid>
      </Grid>
      <CardContent>
        <TrendContainer>
          <Typography variant="h5" component="div">
            {metricValue}
          </Typography>
          <TrendIcon />
        </TrendContainer>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const ProjectsMetricCard = ({
  milestoneValue=75,
  taskValue=75,
  blockerValue=75,
  blockerIndicator="High",
}) => {
    return (
    <Card sx={{ maxWidth: 345 }} variant="outlined" style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)'}}>
      <MetricContainer>
        <CardHeader title="Projects Metric" />
        <Typography variant="body2" color="text.secondary" ml={4} mt={-4}>
            Key perfromance indicator for projects progress
        </Typography>
      </MetricContainer>
      <CardContent>
        <MetricContainer>
          <CardHeaderWithValue headerTitle="Milestones Achieved" headerValue={taskValue} />
          <LinearProgress variant="determinate" value={milestoneValue} />
        </MetricContainer>
        <MetricContainer>
          <CardHeaderWithValue headerTitle="Tasks Completed" headerValue={taskValue} />
          <LinearProgress variant="determinate" value={taskValue} />
        </MetricContainer>

        <Typography variant="h5" component="div">Potential Blockers</Typography>
        <CardValueWithBadge value={blockerValue} badgeIndicator={blockerIndicator} />
      </CardContent>
    </Card>
  );
};

export const TeamProductivityMetricCard = ({
  taskCompletionValue=75,
  workloadMessage="Needs Improvement",
  workloadIndicator="Medium",
  improvementMessage="No action required",
  improvementIndicator="Low",
}) => {
    return (
    <Card sx={{ maxWidth: 345 }} variant="outlined" style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)'}}>
      <CardHeader title="Team Productivity" />
      <CardContent>
        <MetricContainer>
          <CardHeaderWithValue headerTitle="Tasks Completed" headerValue={taskCompletionValue} />
          <LinearProgress variant="determinate" value={taskCompletionValue} />
        </MetricContainer>

        <MetricContainer>
          <Typography variant="h5" component="div">Workload Balance</Typography>
          <CardValueWithBadge value={workloadMessage} badgeIndicator={workloadIndicator} />
        </MetricContainer>

        <Typography variant="h5" component="div">Potential Improvements</Typography>
        <CardValueWithBadge value={improvementMessage} badgeIndicator={improvementIndicator} />
      </CardContent>
    </Card>
  );
};