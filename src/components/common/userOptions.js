import React from "react";
import { Dropdown, Image } from "semantic-ui-react";

const trigger = (
  <div>
    <br />
    <span>
      <Image
        avatar
        src="https://res.cloudinary.com/dxecwuaqd/image/upload/c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1550079584/o75xgubltk4hso90l9jt.png"
      />{" "}
    </span>
  </div>
);

const options = [
  { key: "user", text: "Account", icon: "settings" },
  {
    key: "settings", text: "profile", icon: "user", href: "/profile"
  },
  {
    key: "create-article", text: "New article", icon: "write", href: "/create-article"
  },
  {
    key: "sign-out", text: "Home", icon: "home", href: "/"
  }
];

const DropdownImageTriggerExample = () => (
  <Dropdown
    trigger={trigger}
    options={options}
    pointing="top left"
    icon={null}
  />
);

export default DropdownImageTriggerExample;
