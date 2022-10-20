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
import Loader from "./Loader";

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
  const coinPrice = useMemo(() => {
    return coinHistory?.data?.history?.map((coin) => coin.price);
  }, [coinHistory]);

  const coinTimestamp = useMemo(() => {
    return coinHistory?.data?.history?.map((coin) =>
      new Date(coin.timestamp).toLocaleDateString()
    );
  }, [coinHistory]);

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
