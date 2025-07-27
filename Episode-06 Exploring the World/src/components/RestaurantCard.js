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
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-logo"
      />
      <div className="restaurant-details">
        <h2>{name}</h2>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <p>{externalRatings.aggregatedRating.rating}</p>
        <p>{sla.minDeliveryTime + " Mins"}</p>
        <p>₹{costForTwo / 100} FOR TWO </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
