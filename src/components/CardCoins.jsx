import millify from "millify";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { useEffect, useState } from "react";

function CardCoins({ currency }) {
  const [change, setChange] = useState(true);

  useEffect(() => {
    if (currency.change < 0) {
      setChange(false);
    }
  }, [currency]);

  return (
    <Link to={`/crypto/${currency.uuid}`}>
      <Card
        title={`${currency.rank}. ${currency.name}`}
        extra={<img className="crypto-image" src={currency.iconUrl} />}
        hoverable
      >
        <p>Precio: {millify(currency.price)}</p>
        <p>Cotización: {millify(currency.marketCap)}</p>
        <h4>
          Cambio Diario:{" "}
          <span className={change ? "change-up" : "change-down"}>
            {millify(currency.change)}%
          </span>
        </h4>
      </Card>
    </Link>
  );
}

export default CardCoins;
