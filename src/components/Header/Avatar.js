

import React from "react";
import {Image} from "semantic-ui-react";

export default function AvatarUser({avatar}) {
	const avatarURI = avatar ? avatar: require("../../asset/img/default-avatar.png");
	return (
		<div className="float-left avatar">
			{/* <Avatar src={avatarURI}/> */}
			<Image avatar src={avatarURI} />
		</div>
      
	);
}
