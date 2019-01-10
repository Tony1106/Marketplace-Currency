import React, { Component } from "react";
import styles from "./ListItemMarketPlace.module.css";
import MAvatar from "../Avatar";
import { OfferButton } from "../Button/ButtonFullWidth";
import { BuyText } from "../TextTypo";
import ShowValue from "../ShowValue";
import {withRouter} from "react-router-dom";

import RatingDiabled from "../Rating/RatingDisabled";
class ListItemMarketPlaceBuy extends Component {
	handleClick(){
		const id = this.props.id;
		this.props.history.push(`/item/${id}`);
    
	}
	render() {
		const { itemData } = this.props;
    
		const {
			amountMoney,
			autoAcceptOffer,
			currencyBuy,
			currencySell,
			description,
			liveRate,
			location,
			minOffer,
			title,
			type,
			userProfile
		} = itemData;
		return (
			<div className={styles.wrapItem}>
				<MAvatar
					src="https://d1klenmqvfdv9g.cloudfront.net/wp-content/uploads/2018/09/wpmanageninja_logo_icon-1-1.png"
					size="10px"
					userName="Ha noi"
					className={styles.item}
				/>{" "}
				<hr className={styles.devider} />
				<div className={styles.item}>
					<RatingDiabled stars={4} />
				</div>
				<hr className={styles.devider} />
				<div className={styles.item}>
					<BuyText />
				</div>
				<hr className={styles.devider} />
				<div className={styles.item}>
					<i className="fas fa-map-marker-alt" style={{marginRight: "5px"}}/>  {location}
				</div>
				<div className={styles.wrapShowValue}>
					<div className={styles.showValue}>
						<ShowValue data ={{currencyBuy, autoAcceptOffer, currencySell,location,type, amountMoney}} />
					</div>
				</div>
				<OfferButton name="Offer" className={styles.buttonOffer} onCustomClick={this.handleClick.bind(this)}/>
			</div>
		);
	}
}
export default withRouter(ListItemMarketPlaceBuy);