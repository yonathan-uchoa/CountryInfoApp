import { Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { useTicks } from "@mui/x-charts/hooks/useTicks";

const PopulationChart = ({ populationData }: any) => {
  console.log("teste", populationData);
  if (populationData?.status == 200) {
    return (
      <LineChart
        dataset={populationData.data.data.populationCounts}
        xAxis={[{ dataKey: "year" }]}
        series={[
          {
            dataKey: "value",
          },
        ]}
        height={300}
      />
    );
  }

  return (
    <>
      <Typography>We don't have a proper population count yet...</Typography>
    </>
  );
};

export default PopulationChart;
