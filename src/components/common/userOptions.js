import React from "react";
import { Dropdown, Image } from "semantic-ui-react";
import { logout } from "../../_helpers/history";

const username = localStorage.getItem("username");
const trigger = (
  <div className="user-trigger">
    <br />
    <span>
      <span className="icon-username">
        {username}
      </span>
      <Image
        avatar
        src="https://res.cloudinary.com/dxecwuaqd/image/upload/c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1550079584/o75xgubltk4hso90l9jt.png"
      />
    </span>
  </div>
);

const options = [
  {
    key: "user",
    text: (
      <span>
        Signed in as <strong>{username}</strong>
      </span>
    ),
    disabled: true
  },
  {
    key: "profile",
    text: "Profile",
    icon: "user",
    href: "/profile"
  },
  {
    key: "your-articles",
    text: "Articles",
    icon: "file",
    href: "/your-articles"
  },
  {
    key: "create-article",
    text: "New article",
    icon: "write",
    href: "/create-article"
  },
  {
    key: "log-out",
    text: "Logout",
    icon: "log out",
    onClick: logout
  }
];

const DropDown = () => <Dropdown item simple trigger={trigger} options={options} icon="caret down" />;

export default DropDown;
