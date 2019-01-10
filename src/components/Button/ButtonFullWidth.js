import React from "react";
import button from "../../css/components/button";
import styles from "./Button.module.css";
import {Button, Icon} from "semantic-ui-react";
function ButtonFullWidth(props) {
	return (
		<div>
			<button onClick={props.onCustomClick} className={styles.buttonFullWidth}>{props.name}</button>
		</div>
	);
}
function ButtonNormalSize(props) {
	return (
		<div>
			<button onClick={props.onCustomClick} className={styles.buttonNormalSize}>{props.name}</button>
		</div>
	);
}
function OfferButton(props) {
	return (
		<div style={{height: "70%"}}>
			<button className={styles.OfferButton} onClick={props.onCustomClick}>{props.name}</button>
		</div>
	);
}
function SemanticButton(props) {
	return (
		<Button style={{margin: "20px 0"}} icon labelPosition='left' onClick={props.onCustomClick} color='violet' disabled={props.disabled}>
			<Icon name='cart arrow down' />
			{props.name}
		</Button>
	);
}
export {
	ButtonFullWidth, OfferButton,ButtonNormalSize,SemanticButton
};

