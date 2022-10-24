import { useEffect, useState } from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import ButtonOffTrack from "../components/ButtonOffTrack";

export default function TrackingCoins() {
  const stateCoins = useSelector((state) => state.onTrackSlice);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(stateCoins);
  }, [stateCoins]);

  const columns = [
    {
      title: "Ranking",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Precio",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Cotizaciones",
      dataIndex: "marketCap",
      key: "marketCap",
    },
    {
      title: "Cambios",
      dataIndex: "change",
      key: "change",
    },
    {
      title: "Acciones",
      dataIndex: "",
      key: "x",
      render: (data) => {
        const { uuid } = data;
        return <ButtonOffTrack uuid={uuid} />;
      },
    },
  ];

  return (
    <div>
      <h1>En seguimiento</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
