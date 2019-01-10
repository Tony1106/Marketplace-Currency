import React, { Component } from "react";
import { Container, Image,Label,Icon } from "semantic-ui-react";
import styles from "./styles.module.css";
export default class About extends Component {
	render() {
		return (
			<Container>
				<h1 className={styles.header}>About Us</h1>
				<Image src={require("../../asset/img/banner-about.jpg")} />
				<div className={styles.textWraper}>
					<p>
            A great page for you to exchange currency money with your
            neighborhood
					</p>
					<h3>Developer</h3>
					<div>
						<Label as="a" color="blue" image style={{marginTop: "10px"}}>
							<img src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg" />
              Tony
							<Label.Detail>Owner</Label.Detail>
						</Label>
						<Label as="a" color="teal" image style={{marginTop: "10px"}}>
							<img src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
              Thai Jack
							<Label.Detail>Collaborator</Label.Detail>
						</Label>
						<Label as="a" color="yellow" image  style={{marginTop: "10px"}}>
							<img src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" />
              Tracy Le
							<Label.Detail>Collaborator</Label.Detail>
						</Label>
					</div>
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
