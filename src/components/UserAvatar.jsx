import { useAuth } from "../hooks/useAuth";
import { Avatar, Typography, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

function UserAvatar() {
  const { user } = useAuth();
  return (
    <div>
      <Avatar src={<UserOutlined />} shape="square" size={64} />
      <Typography.Title
        level={4}
        style={{ color: "white", marginLeft: "10px" }}
      >
        Users name
      </Typography.Title>
      <Button
        type="primary"
        onClick={() => {
          logOut();
        }}
      >
        Log Out
      </Button>
    </div>
  );
}

export default UserAvatar;
