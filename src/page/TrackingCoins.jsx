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
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Market Cap",
      dataIndex: "marketCap",
      key: "marketCap",
    },
    {
      title: "Change",
      dataIndex: "change",
      key: "change",
    },
    {
      title: "Action",
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
      <h1>TrackingCoins</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
