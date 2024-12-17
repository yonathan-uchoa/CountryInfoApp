import { Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

const PopulationChart = ({ populationData }: any) => {
  console.log("teste", populationData);
  if (populationData.status == 200) {
    const lastFive = populationData.data.data.populationCounts.slice(-2);
    console.log(lastFive);
    return (
      <LineChart
        dataset={populationData.data.data.populationCounts}
        xAxis={[{ dataKey: "years" }]}
        series={[
          {
            dataKey: "value",
            valueFormatter: (value) => (value == null ? '?' : value.toString()),
          },
        ]}
        height={600}
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        grid={{ vertical: true, horizontal: true }}
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
