import { Typography, Row, Col, Statistic, Skeleton } from "antd";
import millify from "millify";

const { Title } = Typography;

export default function GlobalCryptoStats({ globalStats }) {
  const {
    total,
    totalExchanges,
    totalMarketCap,
    total24hVolume,
    totalMarkets,
  } = globalStats;

  return (
    <>
      <Title level={2} className="heading">
        Estadísticas globales
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Criptomonedas totales" value={millify(total)} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Intercambios totales"
            value={millify(totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Cotizaciones totales"
            value={millify(totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Volumen total en 24hs"
            value={millify(total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Mercados Totales" value={millify(totalMarkets)} />
        </Col>
      </Row>
    </>
  );
}
