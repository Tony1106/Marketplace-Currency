import React from "react";
import ReactLoading from "react-loading";
import {colorDefine} from "../../constants/styles";
import "../../css/components/spinner.css";
const Spinning = ({ type, color }) => (
	<div id="spinner">
		<ReactLoading type={"spin"} color={colorDefine.primary} height={50} width={50} />
	</div>
	
);

export default Spinning;
