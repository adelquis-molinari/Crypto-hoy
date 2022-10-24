import { Button, Popconfirm, message } from "antd";
import { useDispatch } from "react-redux";
import { deleteTrackCoin } from "../redux/factures/onTrackSlice";
import { DeleteOutlined } from "@ant-design/icons";

const ButtonOffTrack = ({ uuid }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTrackCoin(uuid));
    message.error("Moneda eliminada de la lista de seguimiento!");
  };

  return (
    <Button type="primary" danger ghost>
      <Popconfirm title="Estas seguro?" onConfirm={handleDelete}>
        {<DeleteOutlined />}
      </Popconfirm>
    </Button>
  );
};

export default ButtonOffTrack;
