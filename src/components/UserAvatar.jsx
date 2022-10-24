import { Avatar } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import "../styles/userAvatar.css";

function UserAvatar() {
  const userData = useSelector((state) => state.userDataSlice);

  const { email, displayName, photoURL } = userData[0];
  const { logOut } = useAuth();
  const emailName = email.substring(0, email.indexOf("@"));
  return (
    <div className="avatar-container">
      <div className="avatar-description">
        <h2 className="avatar-name"> Hola {displayName || emailName} 👋</h2>
        <div className="avatar-action">
          <Avatar
            size={32}
            icon={<UserOutlined />}
            src={photoURL}
            className="avatar"
          />
          <button className="avatar-button" onClick={logOut}>
            cerrrar sesión <LogoutOutlined />
          </button>
        </div>
      </div>
    </div>
  );
}
export default UserAvatar;
