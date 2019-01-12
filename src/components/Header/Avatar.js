import React from "react";
import { Image } from "semantic-ui-react";
import img from "../../asset/img/default-avatar.png";

export default function AvatarUser({ avatar }) {
  const avatarURI = avatar || img;
  return (
    <div className="float-left avatar">
      {/* <Avatar src={avatarURI}/> */}
      <Image avatar src={avatarURI} />
    </div>
  );
}
