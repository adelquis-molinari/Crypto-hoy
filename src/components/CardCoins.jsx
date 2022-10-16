import millify from "millify";
import { Link } from "react-router-dom";
import { Card } from "antd";

function CardCoins({ currency }) {
  return (
    <Link to={`/crypto/${currency.uuid}`}>
      <Card
        title={`${currency.rank}. ${currency.name}`}
        extra={<img className="crypto-image" src={currency.iconUrl} />}
        hoverable
      >
        <p>Price: {millify(currency.price)}</p>
        <p>Market Cap: {millify(currency.marketCap)}</p>
        <p>Daily Change: {millify(currency.change)}%</p>
      </Card>
    </Link>
  );
}

export default CardCoins;
