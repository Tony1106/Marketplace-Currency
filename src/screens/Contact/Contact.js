import React, { Component } from "react";
import { Container, Image,Icon } from "semantic-ui-react";
import styles from "./styles.module.css";
export default class Contact extends Component {
	render() {
		return (
			<Container>
				<h1 className={styles.header}>Contact Us</h1>
				<Image src={require("../../asset/img/banner-about.jpg")} />
				<div className={styles.textWraper}>
					<p>
            A great page for you to exchange currency money with your
            neighborhood
					</p>
					<h3>Contact me through:</h3>
					<p> <strong>Email: </strong>  <span> <a href="mailto:buiminhtien06@gmail.com?Subject=Hello%20Tony">buiminhtien06@gmail.com</a> </span></p>
					<p><strong>Phone number: </strong>  <span>0449 70 1106</span></p>
					<div className={styles.message}>
						<Icon size='big' name='add' loading />
						<p>This page is inder development</p>
						<Icon size='big' name='add' loading />
					</div>
          
				</div>
			</Container>
		);
	}
}
