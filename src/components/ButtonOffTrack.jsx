import { Button, Popconfirm } from "antd";
import { useDispatch } from "react-redux";
import { deleteTrackCoin } from "../redux/factures/onTrackSlice";
import { DeleteOutlined } from "@ant-design/icons";

const ButtonOffTrack = ({ uuid }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTrackCoin(uuid));
  };

  return (
    <Button type="primary" danger ghost>
      <Popconfirm title="Are you sure?" onConfirm={handleDelete}>
        {<DeleteOutlined />}
      </Popconfirm>
    </Button>
  );
};

export default ButtonOffTrack;
