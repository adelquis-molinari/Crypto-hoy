import { Typography, Row, Col, Skeleton } from "antd";

const { Title, Text } = Typography;
function SkeletonGlobalCryptoStats() {
  return (
    <>
      <Title level={2} className="heading">
        Estadísticas globales
      </Title>
      <Row>
        <Col span={12}>
          <Text>Criptomonedas totales</Text>
          <div>
            <Skeleton.Button active />
          </div>
        </Col>
        <Col span={12}>
          <Text>Intercambios totales</Text>
          <div>
            <Skeleton.Button active />
          </div>
        </Col>
        <Col span={12}>
          <Text>Cotizaciones totales</Text>
          <div>
            <Skeleton.Button active />
          </div>
        </Col>
        <Col span={12}>
          <Text>Volumen total en 24hs</Text>
          <div>
            <Skeleton.Button active />
          </div>
        </Col>
        <Col span={12}>
          <Text>Mercados Totales</Text>
          <div>
            <Skeleton.Button active />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default SkeletonGlobalCryptoStats;
