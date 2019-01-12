import React from "react";
import { Container, Image, Label, Icon } from "semantic-ui-react";
import styles from "./styles.module.css";
import banner from "../../asset/img/banner-about.jpg";

const About = () => (
  <Container>
    <h1 className={styles.header}>About Us</h1>
    <Image src={banner} />
    <div className={styles.textWraper}>
      <p>
        A great page for you to exchange currency money with your neighborhood
      </p>
      <h3>Developer</h3>
      <div>
        <Label as="a" color="blue" image style={{ marginTop: "10px" }}>
          <img
            src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg"
            alt="logo"
          />
          Tony
          <Label.Detail>Owner</Label.Detail>
        </Label>
        <Label as="a" color="teal" image style={{ marginTop: "10px" }}>
          <img
            src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
            alt="logo"
          />
          Thai Jack
          <Label.Detail>Collaborator</Label.Detail>
        </Label>
        <Label as="a" color="yellow" image style={{ marginTop: "10px" }}>
          <img
            src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
            alt="logo"
          />
          Tracy Le
          <Label.Detail>Collaborator</Label.Detail>
        </Label>
      </div>
      <div className={styles.message}>
        <Icon size="big" name="add" loading />
        <p>This page is inder development</p>
        <Icon size="big" name="add" loading />
      </div>
    </div>
  </Container>
);
export default About;
