import React from "react";
import StarRatingComponent from "react-star-rating-component";
export default function RatingDisabled(props) {
  return (
    <StarRatingComponent style = {{margin: 0}}name="rating" starCount={5} value={props.stars} />
  );
}
