import { useMemo } from "react";
import { Col, Row, Typography } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        pointRadius: 0,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
        segment: {
          borderColor: (context) => {
            if (context.type === "segment") {
              return context.p0.parsed.y > context.p1.parsed.y
                ? "#e58080"
                : "#57c353";
            }
          },
        },
      },
    ],
  };
  console.log(
    new Date(coinHistory.data.history[1].timestamp).toLocaleDateString()
  );
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <h2 className="chart-title">{coinName} Price Chart </h2>
        <Col className="price-container">
          <h5 className="price-change">Change: {coinHistory?.data?.change}%</h5>
          <h5 className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </h5>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
