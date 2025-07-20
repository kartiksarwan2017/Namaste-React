// Named Import
import { CDN_URL } from "../utils/constants";
  

const RestaurantCard = (props) => {
  // Object destructuring
  const { resData } = props;
  const {
      cloudinaryImageId,
      name,
      cuisines,
      externalRatings,
      sla,
      costForTwo,
    } = resData;

    return (
      <div
        className="restaurant-card"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <img
          className="restaurant-logo"
          src={ CDN_URL + cloudinaryImageId }
          alt="restaurant-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{externalRatings.aggregatedRating.rating}</h4>
        <h4>{sla.minDeliveryTime + " Mins"}</h4>
        <h4>₹{costForTwo / 100} FOR TWO </h4>
      </div>
    )
};

export default RestaurantCard;